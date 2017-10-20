import {EMAIL_CHANGED} from './types'
//action creator...
export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
}