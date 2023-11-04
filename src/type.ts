import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

export type ReduxState = {
  isFetching: boolean,
  imageURL: string,
  errormMessage: string,
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;