import { Pie } from "react-chartjs-2";

const Graph = ({ data }) => {
  return <Pie data={data} options={{ cutoutPercentage: 50 }} />;
};

export default Graph;
