import React from "react";
import { AdminView, ContributorView, GuestView } from "./components";

// Example 1 : Difficult to read and maintain.

export const App = ({ role }) => {
  return (
    <div>
      {role === "Admin" ? (
        <AdminView />
      ) : role === "Giest" ? (
        <GuestView />
      ) : (
        <ContributorView />
      )}
    </div>
  );
};

//Example 2 - MORE READABLE AND MAINTAINABLE

// const RolesViews = {
//   GUEST: GuestView,
//   ADMIN: AdminView,
//   CONTRIBUTOR: ContributorView,
// };

// export const App = ({ role }) => {
//   const CurrentView = RolesViews[role] ?? DefaultView;

//   return (
//     <div>
//       <CurrentView/>
//     </div>
//   )
// }
