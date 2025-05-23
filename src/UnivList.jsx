import React from 'react'
import CountryList from './CountryList';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

const UnivList = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUniversities = async () => {
    try {
        const response = await axios.get('./world_universities_and_domains.json');
        setUniversities(response.data);
        console.log(response);
        console.log("axios의 get 메서드로 데이터 받아오기 성공");
    } catch (error) {
        setError("데이터 요청 실패");
        console.error("데이터 요청 실패:", error);
        window.alert("데이터 요청 실패");
    } finally {
        setLoading(false);
    }
    };

    useEffect(() => {
        getUniversities();
    }, []);

    if (loading) return <div>로딩 중......</div>;
    if (error) return <div>에러: {error}</div>;


    return (
        <div>
            {/* header */}
            <div className='text-center align-middle text-5xl bg-gray-200 shadow-lg p-4'> 
                Univ List
            </div>
            {/* navbar */}
            <div><Navbar/></div>
            
            {/* body */}
            <div>
                <ul>
                    {universities.map((university,index) => (
                    <li key={index}>■{university.name}({university.domains})</li>
                    ))}
                </ul>

            </div>
        </div>
        
    )
}

export default UnivList