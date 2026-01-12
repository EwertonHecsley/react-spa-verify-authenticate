import { Navigate, Route, Routes } from "react-router-dom";
import {Home} from '../pages/home/Home';
import {Login} from '../pages/login/Login';
import {Member} from '../pages/member/Member';

export const PagesRouter = ({user, setUser}) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/member" element={user ? <Member user={user} /> : <Navigate to="/login" replace />} />
            </Routes>
        </>
    )
};