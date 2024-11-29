import React from "react";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Table from "./components/Table/Table";

const App: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Button */}
      <Button text="QR-код" onClick={() => alert("Кнопка нажата!")} />

      {/* Card */}
      <Card
        title="Последний преподаватель"
        name="Байрамов Б.О."
        date="08.07.2024"
        time="10:00-11:00"
        avatarUrl="/avatar.png"
      />

      {/* Form */}
      <Form />

      {/* Table */}
      <Table />
    </div>
  );
};

export default App;
