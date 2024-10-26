import { useState } from "react";
import BookNow from "../ui/buttons/BookNow";
import wifi from '/public/assets/icons/wifiGray.png'
import ac from '/public/assets/icons/acGray.png'
import bed from '/public/assets/icons/bedGray.png'
import nonSmoking from '/public/assets/icons/nonSmokingGray.png'
import React from "react";


const rooms = [
    {
        type: 'Double Room',
        availability: 'Only 5 rooms left on our site',
        features: [[bed, '1 double bed'], [ac, 'Air conditioning'], [wifi, 'Free WiFi'], [nonSmoking, 'Non-smoking']],
        guests: '2 kids under 6 years stay Free',
        price: '¥ 113,001',
        choices: ['Flexible to reschedule if plans change', 'Non-refundable', 'Pay online'],
    },
    {
        type: 'Superior Double Room',
        availability: 'Only 5 rooms left on our site',
        features: [[bed, '1 double bed'], [ac, 'Air conditioning'], [wifi, 'Free WiFi'], [nonSmoking, 'Non-smoking']],
        guests: '2 kids under 6 years stay Free',
        price: '¥ 220,099',
        choices: ['Flexible to reschedule if plans change', 'Non-refundable', 'Pay online'],
    },
];

export default function RoomsInfo() {
    const [selectedRooms, setSelectedRooms] = useState([0, 0]);

    const handleRoomSelection = (index: number, value: number) => {
        const updatedRooms = [...selectedRooms];
        updatedRooms[index] = value;
        setSelectedRooms(updatedRooms);
    };
    return <div className="container mx-auto">
        <p className="font-bold text-lg py-4">Select your room</p>
        <table className="table-auto w-full border-separate border-spacing-0">
            <thead>
                <tr className="">
                    <th className="border-b-2 border-t-2 border-r-2 px-3 py-4 text-left">Room type</th>
                    <th className="border-b-2 border-t-2 border-r-2 px-3 py-4 text-left">Number of guests</th>
                    <th className="border-b-2 border-t-2 border-r-2 px-3 py-4 text-left">Price for 10 nights</th>
                    <th className="border-b-2 border-t-2 border-r-2 px-3 py-4 text-left">Your choices</th>
                    <th className="border-b-2 border-t-2 border-r-2 px-3 py-4 text-left">Select rooms</th>
                    <th className="border-b-2 border-t-2 p-2 text-left"></th>
                </tr>
            </thead>
            <tbody>
                {rooms.map((room, index) => (
                    <tr key={index} className="">
                        <td className="p-2 w-[200px] border-b-2 border-r-2">
                            <div>
                                <h3 className="font-bold text-lg text-lion-200">{room.type}</h3>
                                <p className="text-xs font-bold">{room.availability}</p>
                                <ul className="mt-2">
                                    {room.features.map((feature, idx) => (
                                        <div key={idx} className="text-sm flex items-center my-3">
                                            <img className="h-4 mr-3" src={typeof feature[0] === 'object' ? feature[0].src : feature[0]} alt="" /> {String(feature[1])}
                                        </div>
                                    ))}
                                </ul>
                                <a href="#" className="text-blue-500 text-sm">See all room facilities</a>
                            </div>
                        </td>
                        <td className="p-4 border-b-2 border-r-2 text-sm text-alice-blue-400 align-top w-[180px]">{room.guests}</td>
                        <td className="p-4 border-b-2 border-r-2 font-bold align-top w-[180px]">{room.price}<br /><span className="text-alice-blue-400 text-xs">Includes taxes and charges</span></td>
                        <td className="p-4 border-b-2 border-r-2 align-top w-[220px] overflow-hidden">
                            <ul className="text-sm list-disc list-inside">
                                {room.choices.map((choice, idx) => (
                                    <li key={idx}> {choice}</li>
                                ))}
                            </ul>
                        </td>
                        <td className="p-4 border-b-2 border-r-2 align-top">
                            <div className="flex items-center">
                                <select
                                    className="border rounded-md p-1"
                                    value={selectedRooms[index]}
                                    onChange={(e) => handleRoomSelection(index, parseInt(e.target.value))}
                                >
                                    {[1,2,3,4,5,6].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </td>
                        <td className="p-4 border-b-2 align-top">
                            <div className="scale-90">
                                <BookNow />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}