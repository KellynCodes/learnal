import { Action, createReducer, on } from '@ngrx/store';
import { initialCourseState } from './selector';
import * as courseActions from './action';
import { CourseResponseDto } from '../../../services/course/Dto/CourseResponseDto';

const _courseReducer = createReducer(
  initialCourseState,
  on(courseActions.CreateCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.UpdateCourse, (state, action) => {
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourse, (state, action) => {
    console.log(action.IsLoading);
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
    };
  }),

  on(courseActions.LoadCourseFailure, (state, action) => {
    console.log(action.IsLoading);
    return {
      ...state,
      courses: state.courses,
      IsLoading: action.IsLoading,
      errorMessage: action.errorMessage
    };
  }),

  on(courseActions.LoadCourseSuccess, (state, action) => {
    return {
      ...state,
      courses: action?.courses,
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.CreateCourseSuccess, (state, action) => {
    let course = { ...action.course };
    return {
      ...state,
      courses: [...state.courses!, course],
      IsLoading: false,
      errorMessage: null,
    };
  }),

  on(courseActions.UpdateCourseSuccess, (state, action) => {
    const updatedCourse = state.courses!.map((course) => {
      return action.course.id == course.id ? action.course : course;
    });
    return {
      ...state,
      courses: updatedCourse,
      IsLoading: false,
    };
  }),

  on(courseActions.DeleteCourse, (state, action) => {
    const deletedCourse = state.courses!.filter((course) => {
      return course.id !== action.id;
    });

    return {
      ...state,
      courses: deletedCourse,
      IsLoading: false,
    };
  }),

  on(courseActions.CreateCourseFailure, (state, { error }) => {
    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  }),

  on(courseActions.UpdateCourseFailure, (state, { error }) => {
    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  }),

  on(courseActions.DeleteCourseFailure, (state, { error }) => {
    return {
      ...state,
      IsLoading: false,
      errorMessage: error.message,
    };
  })
);

export function courseReducer(state: any, action: Action) {
  return _courseReducer(state, action);
}