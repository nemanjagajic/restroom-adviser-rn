// USER
export const USER_LOGIN = 'USER_LOGIN';
export const USER_FACEBOOK_LOGIN = 'USER_FACEBOOK_LOGIN';
export const USER_GOOGLE_LOGIN = 'USER_GOOGLE_LOGIN';

export const USER_SIGN_UP = 'USER_SIGN_UP';
export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_GET = 'USER_GET';
export const USER_SET = 'USER_SET';

export const USER_UPDATE = 'USER_UPDATE';
export const USER_UPDATE_SET = 'USER_UPDATE_SET';

export const SET_ACTIVE_USER = 'SET_ACTIVE_USER';

export const SET_LOADER = 'SET_LOADER';

export const GLOBAL_ERROR_SET = 'GLOBAL_ERROR_SET';

export const SIGNIN_ERROR_SET = 'SIGNIN_ERROR_SET';
export const SIGNUP_ERRORS_SET = 'SIGNUP_ERRORS_SET';

export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export const FORGOT_PASSWORD_ERROR_SET = 'FORGOT_PASSWORD_ERROR_SET';
export const RESET_PASSWORD_ERROR_SET = 'RESET_PASSWORD_ERROR_SET';

export const PASSWORD_CHANGE = 'PASSWORD_CHANGE';
export const PASSWORD_CHANGE_ERROR = 'PASSWORD_CHANGE_ERROR';
export const PASSWORD_CHANGE_SUCCESS = 'PASSWORD_CHANGE_SUCCESS';

export const SOCIAL_LOGIN_ERROR_SET = 'SOCIAL_LOGIN_ERROR_SET';

// MY COMMENTS
export const GET_MY_COMMENTS = 'GET_MY_COMMENTS';
export const SET_FETCHING_MY_COMMENTS = 'SET_FETCHING_MY_COMMENTS';
export const SET_FETCHING_MY_NEW_COMMENTS = 'SET_FETCHING_MY_NEW_COMMENTS';
export const SET_FETCHING_MY_COMMENTS_FINISHED = 'SET_FETCHING_MY_COMMENTS_FINISHED';
export const SET_FETCHING_MY_NEW_COMMENTS_FINISHED = 'SET_FETCHING_MY_NEW_COMMENTS_FINISHED';
export const ADD_MY_COMMENTS = 'ADD_MY_COMMENTS';
export const RESET_MY_COMMENTS = 'RESET_MY_COMMENTS';

// MY RATINGS
export const GET_MY_RATINGS = 'GET_MY_RATINGS';
export const SET_FETCHING_MY_RATINGS = 'SET_FETCHING_MY_RATINGS';
export const SET_FETCHING_MY_NEW_RATINGS = 'SET_FETCHING_MY_NEW_RATINGS';
export const SET_FETCHING_MY_RATINGS_FINISHED = 'SET_FETCHING_MY_RATINGS__FINISHED';
export const SET_FETCHING_MY_NEW_RATINGS_FINISHED = 'SET_FETCHING_MY_NEW_RATINGS_FINISHED';
export const ADD_MY_RATINGS = 'ADD_MY_RATINGS';
export const RESET_MY_RATINGS = 'RESET_MY_RATINGS';

// RESTROOMS
export const ADD_RESTROOM = 'ADD_RESTROOM';
export const FETCH_RESTROOMS = 'FETCH_RESTROOMS';
export const SET_RESTROOMS = 'SET_RESTROOMS';
export const SET_ADDING_RESTROOM = 'SET_ADDING_RESTROOM';
export const SET_FINISHED_ADDING_RESTROOM = 'SET_FINISHED_ADDING_RESTROOM';

// COMMENTS
export const ADD_RESTROOM_COMMENT = 'ADD_RESTROOM_COMMENT';
export const SET_ADDING_COMMENT = 'SET_ADDING_COMMENT';
export const SET_ADDING_COMMENT_FINISHED = 'SET_ADDING_COMMENT_FINISHED';
export const GET_RESTROOM_COMMENTS = 'GET_RESTROOM_COMMENTS';
export const ADD_RESTROOM_COMMENTS = 'ADD_RESTROOM_COMMENTS';
export const SET_FETCHING_COMMENTS = 'SET_FETCHING_COMMENTS';
export const RESET_RESTROOM_COMMENTS = 'RESET_RESTROOM_COMMENTS';
export const SET_FETCHING_NEW_COMMENTS = 'SET_FETCHING_NEW_COMMENTS';
export const SET_FETCHING_COMMENTS_FINISHED = 'SET_FETCHING_NEW_COMMENTS_FINISHED';
export const SET_FETCHING_NEW_COMMENTS_FINISHED = 'SET_FETCHING_COMMENTS_FINISHED';

// RATINGS
export const GET_RESTROOM_RATINGS = 'GET_RESTROOM_RATINGS';
export const SET_RESTROOM_RATINGS = 'SET_RESTROOM_RATINGS';
export const SET_FETCHING_RATINGS = 'SET_FETCHING_RATINGS';
export const SET_FETCHING_RATINGS_FINISHED = 'SET_FETCHING_RATINGS_FINISHED';
export const ADD_RESTROOM_RATING = 'ADD_RESTROOM_RATING';
export const SET_ADDING_RATING = 'SET_ADDING_RATING';
export const SET_ADDING_RATING_FINISHED = 'SET_ADDING_RATING_FINISHED';

// FEEDS
export const GET_FEED_RESTROOMS = 'GET_FEED_RESTROOMS';
export const ADD_FEED_RESTROOMS = 'ADD_FEED_RESTROOMS';
export const RESET_FEED_RESTROOMS = 'RESET_FEED_RESTROOMS';
export const SET_FETCHING_FEED_RESTROOMS = 'SET_FETCHING_FEED_RESTROOMS';
export const SET_FETCHING_NEW_FEED_RESTROOMS = 'SET_FETCHING_NEW_FEED_RESTROOMS';
export const SET_FETCHING_FEED_RESTROOMS_FINISHED = 'SET_FETCHING_FEED_RESTROOMS_FINISHED';
export const SET_FETCHING_NEW_FEED_RESTROOMS_FINISHED = 'SET_FETCHING_NEW_FEED_RESTROOMS_FINISHED';

// MY FEEDS
export const GET_MY_FEED_RESTROOMS = 'GET_MY_FEED_RESTROOMS';
export const ADD_MY_FEED_RESTROOMS = 'ADD_MY_FEED_RESTROOMS';
export const RESET_MY_FEED_RESTROOMS = 'RESET_MY_FEED_RESTROOMS';
export const SET_FETCHING_MY_FEED_RESTROOMS = 'SET_FETCHING_MY_FEED_RESTROOMS';
export const SET_FETCHING_MY_NEW_FEED_RESTROOMS = 'SET_FETCHING_MY_NEW_FEED_RESTROOMS';
export const SET_FETCHING_MY_FEED_RESTROOMS_FINISHED = 'SET_FETCHING_MY_FEED_RESTROOMS_FINISHED';
export const SET_FETCHING_MY_NEW_FEED_RESTROOMS_FINISHED =
  'SET_FETCHING_MY_NEW_FEED_RESTROOMS_FINISHED';

// OPEN STREET MAPS
export const GET_OSM_SUGGESTIONS = 'GET_OSM_SUGGESTIONS';
export const SET_OSM_SUGGESTIONS = 'SET_OSM_SUGGESTIONS';
export const SET_FETCHING_OSM_SUGGESTIONS = 'SET_FETCHING_OSM_SUGGESTIONS';
export const SET_FINISHED_FETCHING_OSM_SUGGESTIONS = 'SET_FINISHED_FETCHING_OSM_SUGGESTIONS';

// BOOKMARKS
export const BOOKMARK_RESTROOM = 'BOOKMARK_RESTROOM';
export const UNBOOKMARK_RESTROOM = 'UNBOOKMARK_RESTROOM';
export const GET_IS_OPENED_RESTROOM_BOOKMARKED = 'GET_IS_OPENED_RESTROOM_BOOKMARKED';
export const SET_FETCHING_BOOKMARK_INFO = 'SET_FETCHING_BOOKMARK_INFO';
export const SET_FETCHING_BOOKMARK_INFO_FINISHED = 'SET_FETCHING_BOOKMARK_INFO_FINISHED';
export const SET_OPENED_RESTROOM_BOOKMARKED = 'SET_OPENED_RESTROOM_BOOKMARKED';
export const SET_OPENED_RESTROOM_NOT_BOOKMARKED = 'SET_OPENED_RESTROOM_NOT_BOOKMARKED';
export const SET_ADDING_BOOKMARK_INFO = 'SET_ADDING_BOOKMARK_INFO';
export const SET_ADDING_BOOKMARK_INFO_FINISHED = 'SET_ADDING_BOOKMARK_INFO_FINISHED';

// BOOKMARKED RESTROOMS
export const RESET_MY_BOOKMARKED_RESTROOMS = 'RESET_MY_BOOKMARKED_RESTROOMS';
export const ADD_MY_BOOKMARKED_RESTROOMS = 'ADD_MY_BOOKMARKED_RESTROOMS';

// COMMENT LIKES
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const UNLIKE_COMMENT = 'UNLIKE_COMMENT';
export const SET_ADDING_LIKE_INFO = 'SET_ADDING_LIKE_INFO';
export const SET_ADDING_LIKE_INFO_FINISHED = 'SET_ADDING_LIKE_INFO_FINISHED';
export const SET_COMMENT_LIKED = 'SET_COMMENT_LIKED';
export const SET_COMMENT_UNLIKED = 'SET_COMMENT_UNLIKED';

// RESTROOM VALIDATION
export const SET_FETCHING_RESTROOM_VALIDATION_INFO = 'SET_FETCHING_RESTROOM_VALIDATION_INFO';
export const SET_FETCHING_RESTROOM_VALIDATION_INFO_FINISHED =
  'SET_FETCHING_RESTROOM_VALIDATION_INFO_FINISHED';
export const VALIDATE_RESTROOM = 'VALIDATE_RESTROOM';
export const INVALIDATE_RESTROOM = 'INVALIDATE_RESTROOM';
export const SET_FETCHING_RESTROOM_VALIDATIONS = 'SET_FETCHING_RESTROOM_VALIDATIONS';
export const SET_FETCHING_RESTROOM_VALIDATIONS_FINISHED =
  'SET_FETCHING_RESTROOM_VALIDATIONS_FINISHED';
export const SET_RESTROOM_VALIDATIONS = 'SET_RESTROOM_VALIDATIONS';
export const GET_RESTROOM_VALIDATIONS = 'GET_RESTROOM_VALIDATIONS';
export const SET_RESTROOM_VALIDATED = 'SET_RESTROOM_VALIDATED';
export const SET_RESTROOM_INVALIDATED = 'SET_RESTROOM_INVALIDATED';
