import React from "react";
import SearchPanel from "./SearchPanel";
import AudioMenu from "../other/AudioMenu";

export default function Display({
  onMouse,
  onMusic,
  onLock,
  symbol,
  pressedButton,
  indexDisplayImage,
  onComputer,
  mouseMove = (f) => f,
  canselMouseMove = (f) => f,
  mouseDirection,
  pressedButtonTab,
  pressedButtonUpDown,
  pressedButtonLeft,
  pressedButtonRight,
  pressedButtonDelete,
  pressedButtonBackspace,
  pressedButtonEnter,
  updateButtonEnter = f => f,
}) {
  const [ audioChoice, setAudioChoice ] = React.useState(null);
  
  const refMouse = React.useRef();
  let timerMoveMouse;

  React.useEffect(() => {
    if (!onMusic) {
      setAudioChoice(null);
    }
  }, [onMusic]);

  return (
    <div className={`computer__display`}>
      {onComputer && !onLock && (
        <div className={`display_background displayImage_${indexDisplayImage}`}>
          {!onMusic && <SearchPanel
            pressedButton={pressedButton}
            pressedButtonTab={pressedButtonTab}
            pressedButtonBackspace={pressedButtonBackspace}
            pressedButtonDelete={pressedButtonDelete}
            pressedButtonLeft={pressedButtonLeft}
            pressedButtonRight={pressedButtonRight}
            symbol={symbol}
          />}
          {onMusic && (
          <AudioMenu pressedButtonUpDown={pressedButtonUpDown} audioOnClick={(link) => setAudioChoice(link)} raiseAudio={(choice) => {setAudioChoice(choice); updateButtonEnter()}}/>
          )}
          {(audioChoice || audioChoice === 0) && (pressedButtonEnter > 0) && onMusic && (<audio controls src={audioChoice} autoPlay/>)
            
          }
          {onMouse && (
            <div
              ref={refMouse}
              className={`display_mouse ${onMouse ? mouseDirection : ""}`}
              onPointerOver={() => {
                if (!mouseDirection) {
                  timerMoveMouse = setTimeout(() => {
                    mouseMove("moveRightMouse");
                    timerMoveMouse = setTimeout(() => {
                      mouseMove("rotateMouseUp");
                      timerMoveMouse = setTimeout(() => {
                        mouseMove("moveUpMouse");
                        timerMoveMouse = setTimeout(() => {
                          mouseMove("rotateMouseLeft");
                          timerMoveMouse = setTimeout(() => {
                            mouseMove("moveLeftMouse");
                            timerMoveMouse = setTimeout(() => {
                              mouseMove("rotateMouseDown");
                              timerMoveMouse = setTimeout(() => {
                                mouseMove("moveDownMouse");
                                timerMoveMouse = setTimeout(() => {
                                  mouseMove("rotateMouseRight");
                                  timerMoveMouse = setTimeout(() => {
                                    mouseMove("");
                                  }, 4100);
                                }, 4000);
                              }, 4000);
                            }, 8000);
                          }, 4000);
                        }, 4000);
                      }, 4000);
                    }, 8000);
                  }, 0);
                  setTimeout(() => {
                    canselMouseMove(timerMoveMouse);
                    setTimeout(() => {
                      canselMouseMove(timerMoveMouse);
                      setTimeout(() => {
                        canselMouseMove(timerMoveMouse);
                        setTimeout(() => {
                          canselMouseMove(timerMoveMouse);
                          setTimeout(() => {
                            canselMouseMove(timerMoveMouse);
                            setTimeout(() => {
                              canselMouseMove(timerMoveMouse);
                              setTimeout(() => {
                                canselMouseMove(timerMoveMouse);
                                setTimeout(() => {
                                  canselMouseMove(timerMoveMouse);
                                }, 4500);
                              }, 4500);
                            }, 8500);
                          }, 4500);
                        }, 4500);
                      }, 4500);
                    }, 8500);
                  }, 500);
                }
              }}
            ></div>
          )}
        </div>
      )}
      {onComputer && onLock && (
        <div
          id="display_lock"
          className={`display_background display_lock`}
        ></div>
      )}
    </div>
  );
}
