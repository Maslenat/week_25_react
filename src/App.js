import './App.css';
import { Chart } from "react-google-charts";



 const data = [
  ["Оценка","Количесво учеников"],
  ["Пятерка", 4],
  ["Четверка", 12],
  ["Тройка", 5],
  ["Неуд", 2],

];

 const options = {
  title: "Успеваемость учеников",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}


export default App;
