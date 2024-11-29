import React, { useState } from "react";
import { ChevronDown, ChevronUp, AlertTriangle, Edit2, Trash2, Eye } from "lucide-react";

interface Student {
  id: string;
  name: string;
  avatarUrl: string;
  creationDate: string;
  status: "Active" | "Inactive";
}

interface Case {
  id: string;
  title: string;
  date: string;
  status: "Under Consideration" | "Rejected";
  students: Student[];
}

const cases: Case[] = [
  {
    id: "1",
    title: "Дело №1. Распитие алкоголя в университете",
    date: "19.11.2024",
    status: "Under Consideration",
    students: [
      { id: "1", name: "Аружан Барушева", avatarUrl: "/aru.png", creationDate: "14.11.2024", status: "Active" },
      { id: "2", name: "Аманай Балат", avatarUrl: "/bolat.png", creationDate: "14.11.2024", status: "Active" },
      { id: "3", name: "Данила Дементьев", avatarUrl: "/daniil.png", creationDate: "14.11.2024", status: "Active" },
    ],
  },
  {
    id: "2",
    title: "Дело №2. Курение",
    date: "19.11.2024",
    status: "Rejected",
    students: [],
  },
];

const Table: React.FC = () => {
  const [openCases, setOpenCases] = useState<string[]>([cases[0].id]);

  const toggleCase = (id: string) => {
    setOpenCases((prev) =>
      prev.includes(id) ? prev.filter((caseId) => caseId !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {cases.map((caseItem) => (
        <div key={caseItem.id} className="border-b border-gray-200 pb-4 mb-4">
          {/* Case Header */}
          <div className="flex items-center justify-between p-4 bg-white rounded-t-lg shadow">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => toggleCase(caseItem.id)}
                className={`flex items-center justify-center w-8 h-8 border ${
                  openCases.includes(caseItem.id)
                    ? "bg-[#0068FF] text-white border-transparent"
                    : "bg-white text-[#AFB7CA] border-[#AFB7CA]"
                } rounded-lg`}
              >
                {openCases.includes(caseItem.id) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              <div>
                <h3 className="font-medium text-lg">{caseItem.title}</h3>
                <p className="text-sm text-gray-500">{caseItem.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {caseItem.status === "Under Consideration" ? (
                  <div className="flex items-center text-[#AFB7CA]">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span>На рассмотрении</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-500">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    <span>Отклонено</span>
                  </div>
                )}
                <p className="text-sm text-[#5F6B88]">
                  Выговоров в деле: {caseItem.students.length}
                </p>
              </div>
              <button className="flex items-center px-3 py-1 text-sm text-gray-500 border rounded hover:bg-gray-100">
                <Edit2 className="h-4 w-4 mr-1" />
                Редактировать
              </button>
              <button className="flex items-center px-3 py-1 text-sm text-red-500 border rounded hover:bg-red-100">
                <Trash2 className="h-4 w-4 mr-1" />
                Удалить
              </button>
            </div>
          </div>
          {/* Students Table */}
          {openCases.includes(caseItem.id) && caseItem.students.length > 0 && (
            <table className="w-full mt-4 border-t border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left">Тип выговора</th>
                  <th className="px-4 py-2 text-left">Студент</th>
                  <th className="px-4 py-2 text-left">Дата создания</th>
                  <th className="px-4 py-2 text-left">Статус</th>
                  <th className="px-4 py-2 text-right">Действия</th>
                </tr>
              </thead>
              <tbody>
                {caseItem.students.map((student) => (
                  <tr key={student.id} className="border-t border-gray-200">
                    <td className="px-4 py-2">Распитие алкоголя в университете</td>
                    <td className="px-4 py-2 flex items-center space-x-3">
                      <img
                        src={student.avatarUrl}
                        alt={student.name}
                        className="w-8 h-8 rounded-full bg-[#B190B6] p-1"
                      />
                      <span>{student.name}</span>
                    </td>
                    <td className="px-4 py-2">{student.creationDate}</td>
                    <td className="px-4 py-2">
                      <div className="flex items-center text-orange-500">
                        <AlertTriangle className="h-4 w-4 mr-1" />
                        <span>{student.status === "Active" ? "Действует" : "Неактивен"}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-right">
                      <button className="flex items-center px-3 py-1 text-sm text-gray-500 border rounded hover:bg-gray-100">
                        <Eye className="h-4 w-4 mr-1" />
                        Подробнее
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

export default Table;
