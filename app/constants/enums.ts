// ------------------------
// Environment
// ------------------------
export enum Environment {
  DEVELOPMENT = "development",
  STAGING = "staging",
  PRODUCTION = "production",
}

// ------------------------
// User Roles
// ------------------------
export enum UserRole {
  ADMIN = "admin",
  MODERATOR = "moderator",
  USER = "user",
  GUEST = "guest",
}

// ------------------------
// HTTP Methods
// ------------------------
export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

// ------------------------
// Auth Messages
// ------------------------
export enum AuthMessage {
  LOGIN_SUCCESS = "Login successful",
  LOGIN_FAILED = "Login failed",
  LOGOUT_SUCCESS = "Logout successful",
  UNAUTHORIZED = "Unauthorized access",
}

// ------------------------
// Sort By Options
// ------------------------
export enum SortBy {
  ASC = "asc",
  DESC = "desc",
  NEWEST = "newest",
  OLDEST = "oldest",
}

// ------------------------
// API / Response Statuses
// ------------------------
export enum ResponseStatus {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

// ------------------------
// Navigation Actions
// ------------------------
export enum Navigate {
  BACK = "back",
  FORWARD = "forward",
  HOME = "home",
  DASHBOARD = "dashboard",
}

// ------------------------
// Pages / Routes
// ------------------------
export enum Routes {
  HOME = "/",
  ABOUT = "about",
  CONTACT = "contact",
  LOGIN = "signin",
  REGISTER="signup",
  DASHBOARD = "/dashboard",
  MENU="menu",
  AUTH="auth",
  CART="cart"
}

// ------------------------
// Supported Languages
// ------------------------
export enum Language {
  EN = "en",
  AR = "ar",

}

// ------------------------
// Text Direction
// ------------------------
export enum Directions {
  LTR = "ltr",
  RTL = "rtl",
}