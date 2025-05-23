import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const africaCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo", "Congo (Democratic Republic)",
    "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
    "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya",
    "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia",
    "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone",
    "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
    "Zambia", "Zimbabwe"
];

const Africa = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUniversities = async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
        setUniversities(response.data);
        const AfricaUnivs = response.data.filter(univ => africaCountries.includes(univ.country));
        setUniversities(AfricaUnivs);
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

    if (loading) return(
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-4xl font-bold">로딩 중......</div>
            </div>
        );
    if (error) return(
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-4xl font-bold">에러: {error}</div>
            </div>
        );


    return (
        <div>
            <div className='w-full px-10 flex flex-col justify-center items-center text-2xl pt-5'>
                <ul className='mt-8 h-[600px] overflow-y-auto w-full'>
                    {universities.map((university,index) => (
                        <li className="p-4" key={index}>
                          <p> ✿ {university.name} </p> 
                          <p>country = {university.country}</p>
                          <p>url = <Link to={`https://${university.domains}`} className='text-blue-500 hover:underline'> {university.domains} </Link></p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>  
    )
}

export default Africa