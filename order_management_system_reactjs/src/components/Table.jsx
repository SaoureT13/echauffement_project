import React from "react";

const people = [
    {
        name: "Jerome Bell",
        company: "Asana",
        type: "CUSTOMER",
        interests: ["COLLABORATION", "TECH", "+2"],
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Jane Cooper",
        company: "Zendesk",
        type: "PROSPECT",
        interests: ["EDUCATION", "TECH", "AI"],
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
        name: "Gintaras Arstikaitis",
        company: "Selesforce",
        type: "PROSPECT",
        interests: ["ENGINEERING", "AI", "+3"],
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
        name: "Darlene Robertson",
        company: "Dropbox",
        type: "CUSTOMER",
        interests: ["EDUCATION", "DESIGN", "AI"],
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        name: "Mike Dorsey",
        company: "Crisp",
        type: "CUSTOMER",
        interests: ["AI", "DESIGN", "EDUCATION"],
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        name: "Simona Hewitt",
        company: "Intercom",
        type: "PROSPECT",
        interests: ["AUTOMATION", "AI", "+3"],
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        name: "James O’Conner",
        company: "StudentPulse",
        type: "CUSTOMER",
        interests: ["TECH", "AI", "EDUCATION", "+2"],
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        name: "Alina Fitzgerald",
        company: "Acme",
        type: "CUSTOMER",
        interests: ["EDUCATION", "ROBOTICS", "AI"],
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        name: "Ronnie Pinkman",
        company: "Vamonos Pest",
        type: "CUSTOMER",
        interests: ["ENGINEERING", "AI"],
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const Table = () => {
    return (
        <div className="overflow-x-scroll rounded-2xl border">
            <table className=" min-w-full bg-white shadow rounded-xl ">
                <thead>
                    <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        <th className="p-3 whitespace-nowrap">Name</th>
                        <th className="p-3 whitespace-nowrap">Phone</th>
                        <th className="p-3 whitespace-nowrap">Email</th>
                        <th className="p-3 whitespace-nowrap">Address</th>
                        <th className="p-3 whitespace-nowrap">Commandes</th>
                    </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                    {people.map((person, index) => (
                        <tr
                            key={index}
                            className="border-t border-gray-300 text-sm"
                        >
                            <td className="p-3 flex items-center gap-3 whitespace-nowrap">
                                <img
                                    src={person.avatar}
                                    alt={person.name}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-medium text-gray-900">
                                        {person.name}
                                    </div>
                                    {/* <div className="text-xs text-gray-500">
                                        CMO
                                    </div> */}
                                </div>
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {person.company}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {/* <span className={`text-blue-600 font-medium`}>
                                    {person.type}
                                </span> */}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {/* {person.interests.map((interest, i) => (
                                    <span
                                        key={i}
                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                                    >
                                        {interest}
                                    </span>
                                ))} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
