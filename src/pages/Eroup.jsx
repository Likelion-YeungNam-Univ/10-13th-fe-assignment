import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const europeCountries = [
  "Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia",
  "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland",
  "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova",
  "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania",
  "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine",
  "United Kingdom", "Vatican City"
];

const Eroup = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getUniversities = async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
        setUniversities(response.data);
        console.log(response);
        console.log("axios의 get 메서드로 데이터 받아오기 성공");
        const EuropeUnivs = response.data.filter(univ => europeCountries.includes(univ.country));
        setUniversities(EuropeUnivs);
        console.log(europeCountries);
        console.log("EuropeUniv 데이터 불러오기 성공");
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


export default Eroup