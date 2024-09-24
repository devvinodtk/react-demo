import React from  "react";
import { useParams, Link, Outlet } from "react-router-dom";

function Profile() {
    const {username} = useParams();
    return(
        <>
            <h1>Profile Page</h1>
            <p> Welcome {username}!</p>
            <nav>
                <ul>
                    <li><Link to="settings">Settings</Link></li>
                    <li><Link to="posts">Posts</Link></li>
                </ul>
            </nav>
            <Outlet /> {/* This renders the nested routes */}
        </>
    );
}

export function ProfileSettings() {
    return <h2>Profile Settings</h2>
}

export function ProfilePosts() {
    return <h2>Profile Posts</h2>
}

export default Profile