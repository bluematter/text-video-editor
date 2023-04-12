import {
  FC,
  KeyboardEvent as ReactKeyboardEvent,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import ContentLoader from 'react-content-loader';
import { useKey } from 'react-use';

import { useCurrentTime } from '@/hooks/useCurrentTime';

import { IDurations } from '@/components/Video/Player';

import Corrector, { ICorrector } from './Corrector';
import Playhead from './Playhead';
import Words from './Words';

import {
  IAlternative,
  ITranscription,
  IUpdateTranscription,
  IVideoDimensions,
  IWord,
} from '@/types';

interface ITextViewProps {
  durations: IDurations;
  editData: number[][][];
  introEnabled?: boolean;
  isPlaying: boolean;
  loading: boolean;
  onChangeTranscription: (update: IUpdateTranscription) => void;
  onEditData: (editData: number[][][]) => void;
  onOpenIntroModal: (e: any) => void;
  onSelection: (selection: Selection) => void;
  selectionState: Selection | null;
  transcription: ITranscription[] | undefined;
  videoDimensions: IVideoDimensions | null;
}

interface IHighlightedState {
  totalWords: number;
  totalTime: number;
}

interface ICorrectNodes {
  anchorNode: Node | null;
  focusNode: Node | null;
  rightArrow?: boolean;
  leftArrow?: boolean;
}

const TextView: FC<ITextViewProps> = memo(
  ({
    durations,
    editData,
    introEnabled,
    isPlaying,
    loading,
    onChangeTranscription,
    onEditData,
    onOpenIntroModal,
    onSelection,
    selectionState,
    transcription,
    videoDimensions,
  }) => {
    const { setCurrentTime } = useCurrentTime();
    const textRef = useRef<HTMLDivElement | null>(null);
    const correctorInputRef = useRef<HTMLInputElement>(null);
    const [isMouseDown, setMouseDown] = useState<boolean>(false);
    const [wordsHighlighted, setWordsHighlighted] =
      useState<IHighlightedState | null>(null);
    const [corrector, setCorrector] = useState<
      | ICorrector
      | {
          state: 'initial';
        }
      | null
    >(null);

    const handleCurrentTime = (currentTime: number) => {
      setCurrentTime(currentTime + durations.introDuration);
    };

    const generateRange = ({ a, b, isLtoR }: any) => {
      const range = document.createRange();

      if (!a || !b) {
        console.warn('generateRange: a or b is undefined');
        return range;
      }

      if (a === b) {
        range.setStart(a, 0);
        range.setEnd(a, 1);

        return range;
      }

      if (isLtoR) {
        range.setStart(a, 0);
        range.setEnd(b, 1);

        if (
          !Array.from(b.classList).includes('span-word') &&
          Array.from(a.classList).includes('span-word') &&
          a.parentElement?.firstElementChild
        ) {
          range.setStart(a, 0);
          range.setEnd(a.parentElement.firstElementChild, 1);

          return range;
        }

        return range;
      }

      if (
        !Array.from(a.classList).includes('span-word') &&
        Array.from(b.classList).includes('span-word') &&
        b.parentElement?.lastElementChild?.previousElementSibling
      ) {
        range.setStart(b, 0);
        range.setEnd(
          b.parentElement.lastElementChild.previousElementSibling,
          1
        );

        return range;
      }

      range.setStart(b, 0);
      range.setEnd(a, 1);

      return range;
    };

    const handleUpdatingCorrector = () => {
      const selection = window.getSelection();
      const selectionString = selection?.toString();

      if (selectionString === '') {
        if (corrector) {
          setCorrector(null);
        }

        setWordsHighlighted(null);
      } else {
        if (!corrector) {
          setCorrector({
            state: 'initial',
          });
        }
        setWordsHighlighted({
          totalWords: Number(selection?.toString().split(' ').length),
          totalTime: 5, // TODO: need to figure this out
        });
      }
    };

    const handleClick = () => {
      const selection = window.getSelection();

      if (selection?.type === 'Caret') {
        setCorrector(null);
        if (!isMouseDown) {
          setWordsHighlighted(null);
        }
      }
    };

    const handleDoubleClick = () => {
      const selection = window.getSelection();
      const selectionString = selection?.toString();

      if (selectionString === '') {
        setWordsHighlighted(null);
      } else {
        setWordsHighlighted({
          totalWords: Number(selection?.toString().split(' ').length),
          totalTime: 5, // TODO: need to figure this out
        });
      }
    };

    // RUN TESTS??
    const handleMouseUp = () => {
      const selection = window.getSelection();

      if (selection) {
        const a = selection.getRangeAt(0).startContainer;
        const b = selection.getRangeAt(0).endContainer;
        const aIsP = a?.parentElement?.nodeName === 'P';
        const bIsP = b?.parentElement?.nodeName === 'P';

        // range highlight
        if (selection?.type === 'Range') {
          if (selection.anchorNode && selection.focusNode) {
            const position = selection.anchorNode.compareDocumentPosition(
              selection.focusNode
            );
            const isLtoR = position === 4;

            if (aIsP && bIsP) {
              const range = document.createRange();
              const nextStartTime = Number(
                (a.nextSibling as HTMLElement).getAttribute('data-st')
              );

              if (selection.rangeCount > 0) {
                selection.removeAllRanges();
              }

              range.setStart(a, 0);
              range.setEnd(b, 1);

              selection.addRange(range);
              onSelection(selection);
              handleCurrentTime(nextStartTime);
            } else {
              if (aIsP || bIsP) {
                const range = document.createRange();

                if (selection.rangeCount > 0) {
                  selection.removeAllRanges();
                }

                if (aIsP) {
                  const nextStartTime = Number(
                    (a?.nextSibling as any).getAttribute('data-st')
                  );

                  range.setStart(a, 0);
                  range.setEnd(b?.parentElement as any, 1);

                  selection.addRange(range);
                  onSelection(selection);
                  handleCurrentTime(nextStartTime);
                }

                if (bIsP) {
                  const prevStartTime = Number(
                    (
                      a.parentElement?.parentElement as HTMLElement
                    ).getAttribute('data-st')
                  );

                  range.setStart(a, 0);
                  range.setEnd(b, 1);

                  selection.addRange(range);
                  onSelection(selection);
                  handleCurrentTime(prevStartTime);
                }
              } else {
                const range: Range = generateRange({
                  a: isLtoR
                    ? a.parentElement?.parentElement
                    : b.parentElement?.parentElement,
                  b: isLtoR
                    ? b.parentElement?.parentElement
                    : a.parentElement?.parentElement,
                  isLtoR,
                });

                if (selection.rangeCount > 0) {
                  selection.removeAllRanges();
                }

                // TODO: maybe we can set the selection time and playhead can react to time only
                // TODO: i.e remove need for too much selectionState
                selection.addRange(range);
                onSelection(selection); // TODO: MIGHT NEED TO REMOVE THIS; FORGET STATE
              }
            }
          } else {
            console.warn('No selection anchor or focus node');
          }
        }

        // single click
        if (selection?.type === 'Caret') {
          const rangeobj = document.createRange();
          const clickedNode =
            selection.anchorNode?.parentElement?.parentElement;

          if (aIsP && bIsP) {
            const nextStartTime = Number(
              (b.nextSibling as HTMLElement).getAttribute('data-st')
            );

            if (selection.rangeCount > 0) {
              selection.removeAllRanges();
            }

            rangeobj.setStart(a, 0);
            rangeobj.setEnd(b, 1);

            selection.addRange(rangeobj);
            onSelection(selection);
            handleCurrentTime(nextStartTime);
          } else {
            if (clickedNode) {
              rangeobj.setStart(clickedNode, 0);
              rangeobj.collapse(true);
              selection.removeAllRanges();
              selection.addRange(rangeobj);
            } else {
              console.log('No clicked node');
            }

            handleCurrentTime(Number(clickedNode?.getAttribute('data-st')));
          }
        }
      } else {
        console.log('No selection...');
      }

      setMouseDown(false);
    };

    const handleMouseDown = () => {
      const selection = window.getSelection();

      if (selection) {
        selection.empty();
      }

      setMouseDown(true);
    };

    const handleMouseMove = () => {
      if (isMouseDown) {
        // TODO: Can use selectionState also, they're the same honestly
        // selectionState might be redundant, anytime we need seleciton just call window.getSelection()
        // monitor where selectionState is used and if is needed, otherwise use window.getSelection()
        handleUpdatingCorrector();
      }
    };

    // THIS CODE IS SHITTY
    const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
      const selection = window.getSelection();
      const shiftKey = e.shiftKey;
      const rightArrow = e.key === 'ArrowRight';
      const leftArrow = e.key === 'ArrowLeft';
      const upArrow = e.key === 'ArrowUp';
      const downArrow = e.key === 'ArrowDown';
      const backspaceKey = e.key === 'Backspace';
      const deleteKey = e.key === 'Delete';
      const isArrow = rightArrow || leftArrow;
      const isKeyCombo = shiftKey && isArrow;
      const notValidKey =
        !isArrow && !isKeyCombo && !backspaceKey && !deleteKey;

      if (notValidKey) return console.warn('Key is not an arrow');

      if (selection && !backspaceKey && !deleteKey) {
        const { anchorNode, focusNode } = correctNodes({
          anchorNode: selection.anchorNode,
          focusNode: selection.focusNode,
          rightArrow,
          leftArrow,
        });

        if (isKeyCombo) {
          const rangeobj = document.createRange();

          if (rightArrow) {
            const a = selection.getRangeAt(0).startContainer;
            const b = selection.getRangeAt(0).endContainer;
            const isRoot = a.nodeName === 'SPAN' && b.nodeName === 'SPAN';
            const innerRoot = a.nodeName === '#text' && b.nodeName === '#text';

            if (isRoot) {
              const anchorChildNode = anchorNode.childNodes[0].childNodes[0];
              const focusChildNode: any = focusNode.childNodes[0].childNodes[0];

              rangeobj.setStart(anchorChildNode, 0);
              rangeobj.setEnd(focusChildNode, focusChildNode.length - 1);
            }

            if (innerRoot) {
              const isSpace = !!(
                b?.nodeName === '#text' && b?.parentElement?.nodeName !== 'SPAN'
              );
              const endNextInner: ChildNode | undefined =
                b?.nextSibling?.childNodes[0].childNodes[0];
              const endNextRoot: ChildNode | null | undefined =
                b?.parentElement?.parentElement?.nextSibling;

              if (isSpace && endNextInner) {
                rangeobj.setStart(anchorNode, 0);
                rangeobj.setEnd(endNextInner, (endNextInner as any).length - 1);
              } else if (endNextRoot) {
                rangeobj.setStart(anchorNode, 0);
                rangeobj.setEnd(endNextRoot, 0);
              } else {
                console.warn('Going right: No next root or inner node');
              }
            }
          }

          if (leftArrow) {
            const isEnd = !!selection.getRangeAt(0).endOffset;
            const focusNodeIndex = focusNode.getAttribute('data-index');
            const anchorNodeIndex = anchorNode.getAttribute('data-index');

            if (!isEnd && focusNodeIndex === anchorNodeIndex) {
              const focusPrev: Element | null =
                focusNode.previousElementSibling;
              const anchorPrev: Element | null =
                anchorNode.previousElementSibling;

              if (focusPrev && anchorPrev) {
                rangeobj.setStart(focusPrev, 0);
                rangeobj.setEnd(anchorPrev, 1);
              } else {
                console.warn('Going left: No focusPrev or anchorPrev');
              }
            } else {
              const a = selection.getRangeAt(0).startContainer;
              const b = selection.getRangeAt(0).endContainer;
              const isSpace = !!(
                a?.nodeName === '#text' && a?.parentElement?.nodeName !== 'SPAN'
              );

              if (isSpace) {
                rangeobj.setStart(focusNode, 0);
                rangeobj.setEnd(anchorNode, 1);
              } else {
                rangeobj.setStart(a, 1);
                rangeobj.setEnd(b, 0);
              }
            }
          }

          selection.removeAllRanges();
          selection.addRange(rangeobj);
          handleUpdatingCorrector();
        }

        if (selection?.type === 'Caret' && !isKeyCombo) {
          const rangeobj = document.createRange();

          if (anchorNode) {
            const textNode: any = anchorNode?.childNodes[0].childNodes[0];

            if (textNode) {
              rangeobj.setStart(textNode, rightArrow ? textNode.length : 1);
              rangeobj.collapse(true);
              selection.removeAllRanges();
              selection.addRange(rangeobj);
            } else {
              console.log('TextNode is missing...');
            }
          } else {
            console.log('No active node');
          }
        }
      } else {
        console.log('No selection...');
      }
    };

    const correctNodes = ({
      anchorNode,
      focusNode,
      rightArrow,
      leftArrow,
    }: ICorrectNodes) => {
      let aNode: HTMLElement = anchorNode as HTMLElement;
      let fNode: HTMLElement = focusNode as HTMLElement;

      // TODO: Validate span class
      if (anchorNode?.nodeName === 'SPAN') {
        aNode = anchorNode as HTMLElement;
      }

      // TODO: Validate span class
      if (focusNode?.nodeName === 'SPAN') {
        fNode = focusNode as HTMLElement;
      }

      // This is messy?
      if (anchorNode?.nodeName === '#text') {
        if (rightArrow || (!rightArrow && !leftArrow)) {
          if ((anchorNode as HTMLElement)?.nextElementSibling) {
            aNode = (anchorNode as HTMLElement)
              .nextElementSibling as HTMLElement;
          } else {
            aNode = anchorNode.parentElement?.parentElement as HTMLElement;
          }
        }

        if (leftArrow) {
          if ((anchorNode as HTMLElement)?.previousElementSibling) {
            aNode = (anchorNode as HTMLElement)
              .previousElementSibling as HTMLElement;
          } else {
            aNode = anchorNode.parentElement?.parentElement as HTMLElement;
          }
        }
      }

      if (focusNode?.nodeName === '#text') {
        if (rightArrow) {
          if ((focusNode as HTMLElement)?.nextElementSibling) {
            fNode = (focusNode as HTMLElement)
              .nextElementSibling as HTMLElement;
          } else {
            fNode = focusNode.parentElement?.parentElement as HTMLElement;
          }
        }

        if (leftArrow || (!rightArrow && !leftArrow)) {
          if ((focusNode as HTMLElement)?.previousElementSibling) {
            fNode = (focusNode as HTMLElement)
              .previousElementSibling as HTMLElement;
          } else {
            fNode = focusNode.parentElement?.parentElement as HTMLElement;
          }
        }
      }

      return {
        anchorNode: aNode,
        focusNode: fNode,
      };
    };

    const handleTrim = (e: KeyboardEvent) => {
      e.preventDefault();
      const selection = window.getSelection();

      if (selection) {
        if (selection?.type === 'Range') {
          const { anchorNode, focusNode } = correctNodes({
            anchorNode: selection.anchorNode,
            focusNode: selection.focusNode,
          });

          // TODO: Update this index to be dynamic
          const parentIndex = Number(
            anchorNode?.closest('p')?.getAttribute('data-transcription-index')
          );
          const a = Number(anchorNode?.getAttribute('data-index'));
          const b = Number(focusNode?.getAttribute('data-index'));

          // TODO: Figure out how to take a/b and trim the video at that section
          // TODO: Test for edge cases i.e none trimmed, first and last trimmed, etc
          // TODO: Save trimmed data to state

          const editShape = transcription?.map((_, i) =>
            i === parentIndex
              ? [...(editData.length ? editData[i] : []), [a, b]]
              : editData[i]
              ? editData[i]
              : []
          );

          console.log({
            editShape,
          });

          if (editShape) {
            onEditData(editShape);
          }

          // TODO: This feels like a hack
          const next = focusNode?.nextElementSibling;
          setTimeout(() => {
            const rangeobj = document.createRange();
            if (next) {
              rangeobj.setStart(next, 0);
              rangeobj.collapse(true);
              selection.removeAllRanges();
              selection.addRange(rangeobj);
            } else {
              console.log('No clicked node');
            }
          }, 0);

          // IDEA: track all indexes that were trimmed out
          // IDEA: when looking at timestamps to trim we can reference by index
          // IDEA: we can also filter out the words that were trimmed out
          console.log(
            'Need to slice the transcriptions and adjust the trimming of the video somehow',
            {
              a,
              b,
              selection,
              transcription,
              sliced: transcription?.map((t: ITranscription) =>
                t.alternatives.map((alt: IAlternative) => {
                  const sliced = [
                    ...alt.words.slice(0, a),
                    ...alt.words.slice(b + 1, alt.words.length),
                  ];

                  return {
                    ...alt,
                    transcript: sliced.map((w: IWord) => w.word).join(' '),
                    words: sliced,
                  };
                })
              ),
            }
          );
        }
      } else {
        console.log('No selection to trim...');
      }
    };

    const handleCorrectorFocus = () => {
      setTimeout(() => {
        if (corrector && correctorInputRef.current) {
          (correctorInputRef.current as any).focus();
        }
      }, 0);
    };

    const handleSelectionChanges = () => {
      // TODO: Leverage this somehow??
      if (selectionState) {
        const a = selectionState?.anchorNode as HTMLElement;
        const b = selectionState?.focusNode as HTMLElement;

        if (a && b) {
          const aIndex = a.getAttribute && Number(a.getAttribute('data-index'));
          const bIndex = b.getAttribute && Number(b.getAttribute('data-index'));

          // console.log({
          //   selectionState,
          //   total: bIndex - aIndex + 1
          // });
        }
      }
    };

    useKey(
      (e: KeyboardEvent) => e.code === 'Backspace' || e.code === 'Delete',
      handleTrim
    );
    useEffect(handleCorrectorFocus, [corrector, correctorInputRef.current]);
    useEffect(handleSelectionChanges, [selectionState?.anchorNode]);

    if (transcription === undefined || transcription === null) {
      return <div className='px-8 pt-8'>Video does not have any audio...</div>;
    }

    if (loading || !transcription?.length) {
      return (
        <div className='px-8 pt-8'>
          <div className='mb-4 font-bold text-gray-500'>
            Generating your transcript (this may take a moment)...
          </div>
          <ContentLoader style={{ width: '100%' }}>
            <rect x='0' y='0' rx='4' ry='4' width='700' height='30' />
            <rect x='0' y='40' rx='3' ry='3' width='700' height='30' />
            <rect x='0' y='80' rx='3' ry='3' width='700' height='30' />
            <rect x='0' y='120' rx='3' ry='3' width='700' height='30' />
          </ContentLoader>
        </div>
      );
    }

    return (
      <div
        className='relative h-[100%] text-lg'
        style={{
          flex: 1,
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
      >
        <div className='relative h-[100%] overflow-auto'>
          <Playhead
            textRef={textRef}
            durations={durations}
            isPlaying={isPlaying}
            isMouseDown={isMouseDown}
            selectionState={selectionState}
            videoDimensions={videoDimensions}
          />
          <div
            ref={textRef}
            style={{
              lineHeight: '1.9rem',
            }}
            className='relative z-[2] h-[100%] px-8 pt-8 selection:bg-fuchsia-300/30 selection:text-fuchsia-900'
            onMouseUp={handleMouseUp}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <Words
              durations={durations}
              editData={editData}
              corrector={corrector}
              introEnabled={introEnabled}
              isPlaying={isPlaying}
              transcription={transcription}
              onOpenIntroModal={onOpenIntroModal}
            />
          </div>
        </div>
        <Corrector
          corrector={corrector}
          setCorrector={setCorrector}
          transcription={transcription}
          correctorInputRef={correctorInputRef}
          onChangeTranscription={onChangeTranscription}
        />
        {corrector?.state && wordsHighlighted && (
          <div className='absolute bottom-[15px] right-[25px] z-[9] rounded bg-gray-900 p-2 text-white'>
            <div className='-mb-[4px] text-sm'>
              {wordsHighlighted.totalWords}w
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default TextView;
