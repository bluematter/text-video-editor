import { useRef } from 'react';

// Vertex shader program
const vsSource = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_position*.5+.5;
    v_texCoord.y = 1.-v_texCoord.y;
  }
`;

// Fragment shader program
const fsSource = `
  precision highp float;
  uniform sampler2D u_image;
  uniform bool chroma;
  varying vec2 v_texCoord;
  uniform vec3 keyColor;
  uniform float similarity;
  uniform float smoothness;
  uniform float spill;
  vec2 RGBtoUV(vec3 rgb) {
    return vec2(
      rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
      rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
  }
  vec4 ProcessChromaKey(vec2 v_texCoord) {
    vec4 rgba = texture2D(u_image, v_texCoord);
    float chromaDist = distance(RGBtoUV(texture2D(u_image, v_texCoord).rgb), RGBtoUV(keyColor));
  
    float baseMask = chromaDist - similarity;
    float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
    rgba.a = fullMask;
  
    float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
    float desat = clamp(rgba.r * 0.2126 + rgba.g * 0.7152 + rgba.b * 0.0722, 0., 1.);
    rgba.rgb = mix(vec3(desat, desat, desat), rgba.rgb, spillVal);
  
    return rgba;
  }
  
  void main() {
    if (chroma) {
      gl_FragColor = ProcessChromaKey(v_texCoord);
    } else {
      gl_FragColor = texture2D(u_image, v_texCoord);
    }
  }
`;

const positionData = new Float32Array([
  -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0,
]);

const withGL =
  (func: any) =>
  ({ ...props }) => {
    const buffersRef = useRef<WebGLBuffer | null>(null);
    const textureRef = useRef<WebGLTexture | null>(null);
    const locationRef = useRef<WebGLUniformLocation | null>(null);
    const programRef = useRef<WebGLProgram | null | undefined>(null);
    const uniformRGBRef = useRef<WebGLUniformLocation | null>(null);
    const uniformSimilarityRef = useRef<WebGLUniformLocation | null>(null);
    const uniformSmoothnessRef = useRef<WebGLUniformLocation | null>(null);
    const uniformSpillRef = useRef<WebGLUniformLocation | null>(null);
    const uniformChromaRef = useRef<WebGLUniformLocation | null>(null);
    const videoCanvasRefGL = useRef<HTMLCanvasElement>(null);
    const gl: WebGLRenderingContext | null | undefined =
      videoCanvasRefGL?.current?.getContext('webgl', {
        preserveDrawingBuffer: true,
      });

    const drawScene = (positionLocation: any, buffer: WebGLBuffer) => {
      if (gl && programRef.current) {
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(programRef.current);

        // Chroma
        const matcher = props.chroma?.keyColor?.match(/\d+/g);
        const [keyR, keyG, keyB] =
          props.chroma && props.chroma.keyColor && matcher
            ? matcher.map(Number)
            : [0, 0, 0];
        gl.uniform3f(uniformRGBRef.current, keyR / 255, keyG / 255, keyB / 255);
        gl.uniform1i(uniformChromaRef.current, props.chroma ? 1 : 0);
        gl.uniform1f(uniformSimilarityRef.current, 0.2);
        gl.uniform1f(uniformSmoothnessRef.current, 0.05);
        gl.uniform1f(uniformSpillRef.current, 0);

        // Turn on the vertex attribute
        gl.enableVertexAttribArray(positionLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // Draw the rectangle
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
    };

    // creates a shader of the given type, uploads the source and compiles it.
    const loadShader = (
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ) => {
      const shader = gl.createShader(type);

      if (shader) {
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert(
            'An error occurred compiling the shaders: ' +
              gl.getShaderInfoLog(shader)
          );
          gl.deleteShader(shader);
          return null;
        }

        return shader;
      }
    };

    // Initialize a shader program, so WebGL knows how to draw our data
    const initShaderProgram = (
      gl: WebGLRenderingContext,
      vsSource: string,
      fsSource: string
    ) => {
      if (gl) {
        const shaderProgram = gl.createProgram();

        if (shaderProgram) {
          const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
          const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

          if (vertexShader && fragmentShader) {
            gl.attachShader(shaderProgram, vertexShader);
            gl.attachShader(shaderProgram, fragmentShader);
            gl.linkProgram(shaderProgram);

            // If creating the shader program failed, alert
            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
              alert(
                'Unable to initialize the shader program: ' +
                  gl.getProgramInfoLog(shaderProgram)
              );
              return null;
            }

            return shaderProgram;
          }
        }
      }
    };

    const initializeGL = () => {
      if (gl) {
        // Initialize shader program
        programRef.current = initShaderProgram(gl, vsSource, fsSource);

        if (programRef.current) {
          // look up where the vertex data needs to go.
          locationRef.current = gl.getAttribLocation(
            programRef.current,
            'a_position'
          );

          // set variables
          uniformChromaRef.current = gl.getUniformLocation(
            programRef.current,
            'chroma'
          );
          uniformRGBRef.current = gl.getUniformLocation(
            programRef.current,
            'keyColor'
          );
          uniformSimilarityRef.current = gl.getUniformLocation(
            programRef.current,
            'similarity'
          );
          uniformSmoothnessRef.current = gl.getUniformLocation(
            programRef.current,
            'smoothness'
          );
          uniformSpillRef.current = gl.getUniformLocation(
            programRef.current,
            'spill'
          );

          // Create a vertex buffer
          buffersRef.current = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffersRef.current);
          gl.bufferData(gl.ARRAY_BUFFER, positionData, gl.STATIC_DRAW);

          // Create texture
          textureRef.current = gl.createTexture();
          gl.bindTexture(gl.TEXTURE_2D, textureRef.current);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.RGB,
            1,
            1,
            0,
            gl.RGB,
            gl.UNSIGNED_BYTE,
            new Uint8Array([0, 0, 255])
          );
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

          // Initialize rendering
          gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
          gl.clearColor(1.0, 0.0, 0.0, 1.0);
        }
      }
    };

    return func({
      ...props,
      gl,
      videoCanvasRefGL,
      drawScene,
      glBuffer: buffersRef.current,
      glTexture: textureRef.current,
      locationRef,
      initializeGL,
    });
  };

export default withGL;
