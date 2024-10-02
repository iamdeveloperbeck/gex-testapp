import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name && surname && category) {
            navigate('/testcontent', { state: { student: { name, surname }, category } });
        } else {
            alert('Please fill all the fields');
        }
    };

    return (
        <div className='w-full relative h-screen flex items-center justify-center flex-col gap-4 bg-handled'>
            <div className='backdrop-filter-gex'></div>
            <form onSubmit={handleSubmit} className='w-[380px] h-auto bg-[#fff] p-[40px] rounded-[20px] shadow-lg text-center relative z-20'>
                <div className='flex flex-col items-start'>
                    <label for="first_name" className='block text-sm font-medium text-gray-900'>Ism:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder='Ismni kiriting!'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <label for="last_name" className='block mt-2 text-sm font-medium text-gray-900'>Familya:</label>
                    <input
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                        placeholder='Familyani kiriting!'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    />
                </div>
                <div className='flex items-start flex-col gap-[5px] mt-[15px]'>
                    <label className='block text-sm font-medium text-gray-900'>Yo'nalishlar:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
                        <option value="">Yo'nalishni tanlang!</option>
                        <option value="DPMlarda akusherlik va ginekologik yordam ko'rsatish">Akuserlik va ginekologiya</option>
                    </select>
                </div>
                <button type="submit" className='text-white bg-gradient-to-r from-blue-500 mt-3 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Testni boshlash</button>
            </form>
            <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 relative z-10 flex flex-col gap-[5px]" role="alert">
                <p><span class="font-medium">Diqqat!</span> Har bir test savoli uchun 30 sekund vaqt belgilangan.</p>
                <span class="font-medium">Testni yakunlagandan so'ng natijalarni yuklab olishni unutmang!</span>
            </div>
        </div>
    );
};

export default Home;
