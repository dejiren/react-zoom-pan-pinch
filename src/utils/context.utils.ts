import {
  ReactZoomPanPinchContentRef,
  ReactZoomPanPinchContext,
  ReactZoomPanPinchContextState,
  ReactZoomPanPinchRef,
} from "../models/context.model";
import {
  zoomIn,
  zoomOut,
  setTransform,
  resetTransform,
  zoomToElement,
  centerView,
  setTransformImage,
} from "../core/handlers/handlers.logic";

export const getControls = (
  contextInstance: ReactZoomPanPinchContext,
): ReactZoomPanPinchContentRef => {
  return {
    instance: contextInstance,
    zoomIn: zoomIn(contextInstance),
    zoomOut: zoomOut(contextInstance),
    setTransform: setTransform(contextInstance),
    resetTransform: resetTransform(contextInstance),
    centerView: centerView(contextInstance),
    zoomToElement: zoomToElement(contextInstance),
    setTransformImage: setTransformImage(contextInstance),
  };
};

export const getState = (
  contextInstance: ReactZoomPanPinchContext,
): ReactZoomPanPinchContextState => {
  return {
    instance: contextInstance,
    state: contextInstance.transformState,
  };
};

export const getContext = (
  contextInstance: ReactZoomPanPinchContext,
): ReactZoomPanPinchRef => {
  const ref = {} as ReactZoomPanPinchRef;

  Object.assign(ref, getState(contextInstance));
  Object.assign(ref, getControls(contextInstance));

  return ref;
};
