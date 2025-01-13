import { Card, Table, Space, Statistic, Typography } from "antd";
import {
  DollarCircleFilled,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Color } from "antd/es/color-picker";
import { useEffect, useState } from "react";
import { getCustomers, getInventory, getOrders } from "../../API";
import { getRevenue } from "../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let carSalesData = [
  {
    carName: "Car A",
    carValue: 25000,
    salesData: [
      {
        month: "January",
        revenue: 43224,
        profit: 13953,
        buyer: "Jane Smith",
        address: "456 Elm St, Townsville",
        date: "2024-01-06",
      },
      {
        month: "January",
        revenue: 22144,
        profit: 8416,
        buyer: "Jane Smith",
        address: "321 Pine St, Hamletburg",
        date: "2024-01-17",
      },
      {
        month: "February",
        revenue: 33838,
        profit: 5316,
        buyer: "Jane Smith",
        address: "789 Oak St, Villagetown",
        date: "2024-02-14",
      },
      {
        month: "February",
        revenue: 34922,
        profit: 12008,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-02-05",
      },
      {
        month: "March",
        revenue: 41111,
        profit: 11562,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-03-02",
      },
      {
        month: "March",
        revenue: 41734,
        profit: 13673,
        buyer: "Charlie Davis",
        address: "123 Main St, Cityville",
        date: "2024-03-24",
      },
      {
        month: "April",
        revenue: 47811,
        profit: 7747,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-04-18",
      },
      {
        month: "April",
        revenue: 35320,
        profit: 14347,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-04-22",
      },
      {
        month: "May",
        revenue: 25689,
        profit: 5153,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-05-22",
      },
      {
        month: "May",
        revenue: 23459,
        profit: 14356,
        buyer: "John Doe",
        address: "654 Maple St, Boroughton",
        date: "2024-05-06",
      },
      {
        month: "June",
        revenue: 31400,
        profit: 14744,
        buyer: "Charlie Davis",
        address: "789 Oak St, Villagetown",
        date: "2024-06-27",
      },
      {
        month: "June",
        revenue: 27682,
        profit: 11479,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-06-02",
      },
      {
        month: "July",
        revenue: 33676,
        profit: 13961,
        buyer: "Jane Smith",
        address: "321 Pine St, Hamletburg",
        date: "2024-07-04",
      },
      {
        month: "July",
        revenue: 26794,
        profit: 12215,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-07-22",
      },
      {
        month: "August",
        revenue: 45268,
        profit: 5876,
        buyer: "Alice Johnson",
        address: "321 Pine St, Hamletburg",
        date: "2024-08-27",
      },
      {
        month: "August",
        revenue: 30563,
        profit: 5683,
        buyer: "Alice Johnson",
        address: "654 Maple St, Boroughton",
        date: "2024-08-01",
      },
      {
        month: "September",
        revenue: 25823,
        profit: 7299,
        buyer: "John Doe",
        address: "321 Pine St, Hamletburg",
        date: "2024-09-26",
      },
      {
        month: "September",
        revenue: 41680,
        profit: 6619,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-09-18",
      },
      {
        month: "October",
        revenue: 47460,
        profit: 9987,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-10-20",
      },
      {
        month: "October",
        revenue: 32745,
        profit: 8991,
        buyer: "Charlie Davis",
        address: "321 Pine St, Hamletburg",
        date: "2024-10-23",
      },
      {
        month: "November",
        revenue: 30155,
        profit: 5515,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-11-16",
      },
      {
        month: "November",
        revenue: 26325,
        profit: 10264,
        buyer: "Jane Smith",
        address: "321 Pine St, Hamletburg",
        date: "2024-11-05",
      },
      {
        month: "December",
        revenue: 28927,
        profit: 13208,
        buyer: "Charlie Davis",
        address: "789 Oak St, Villagetown",
        date: "2024-12-15",
      },
      {
        month: "December",
        revenue: 25959,
        profit: 9501,
        buyer: "Jane Smith",
        address: "321 Pine St, Hamletburg",
        date: "2024-12-05",
      },
    ],
    halfYearlyRevenue: [408334, 395375],
    annualRevenue: 803709,
    halfYearlyProfit: [132754, 109119],
    annualProfit: 241873,
  },
  {
    carName: "Car B",
    carValue: 35000,
    salesData: [
      {
        month: "January",
        revenue: 32146,
        profit: 13938,
        buyer: "Bob Brown",
        address: "456 Elm St, Townsville",
        date: "2024-01-18",
      },
      {
        month: "January",
        revenue: 38134,
        profit: 11667,
        buyer: "Charlie Davis",
        address: "789 Oak St, Villagetown",
        date: "2024-01-05",
      },
      {
        month: "February",
        revenue: 46946,
        profit: 14114,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-02-06",
      },
      {
        month: "February",
        revenue: 46002,
        profit: 6091,
        buyer: "Alice Johnson",
        address: "654 Maple St, Boroughton",
        date: "2024-02-12",
      },
      {
        month: "March",
        revenue: 29266,
        profit: 14850,
        buyer: "Bob Brown",
        address: "654 Maple St, Boroughton",
        date: "2024-03-13",
      },
      {
        month: "March",
        revenue: 25946,
        profit: 14558,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-03-19",
      },
      {
        month: "April",
        revenue: 45342,
        profit: 6321,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-04-22",
      },
      {
        month: "April",
        revenue: 36113,
        profit: 13652,
        buyer: "Jane Smith",
        address: "123 Main St, Cityville",
        date: "2024-04-21",
      },
      {
        month: "May",
        revenue: 28716,
        profit: 9193,
        buyer: "Jane Smith",
        address: "654 Maple St, Boroughton",
        date: "2024-05-18",
      },
      {
        month: "May",
        revenue: 46758,
        profit: 13825,
        buyer: "John Doe",
        address: "123 Main St, Cityville",
        date: "2024-05-04",
      },
      {
        month: "June",
        revenue: 35954,
        profit: 11454,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-06-14",
      },
      {
        month: "June",
        revenue: 43977,
        profit: 13138,
        buyer: "Jane Smith",
        address: "654 Maple St, Boroughton",
        date: "2024-06-22",
      },
      {
        month: "July",
        revenue: 42727,
        profit: 5894,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-07-16",
      },
      {
        month: "July",
        revenue: 47497,
        profit: 9942,
        buyer: "Charlie Davis",
        address: "789 Oak St, Villagetown",
        date: "2024-07-15",
      },
      {
        month: "August",
        revenue: 35764,
        profit: 6194,
        buyer: "Alice Johnson",
        address: "321 Pine St, Hamletburg",
        date: "2024-08-13",
      },
      {
        month: "August",
        revenue: 37227,
        profit: 14180,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-08-05",
      },
      {
        month: "September",
        revenue: 48464,
        profit: 5240,
        buyer: "Bob Brown",
        address: "456 Elm St, Townsville",
        date: "2024-09-02",
      },
      {
        month: "September",
        revenue: 26947,
        profit: 12026,
        buyer: "Bob Brown",
        address: "654 Maple St, Boroughton",
        date: "2024-09-06",
      },
      {
        month: "October",
        revenue: 40424,
        profit: 11289,
        buyer: "John Doe",
        address: "321 Pine St, Hamletburg",
        date: "2024-10-27",
      },
      {
        month: "October",
        revenue: 44644,
        profit: 5967,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-10-07",
      },
      {
        month: "November",
        revenue: 42276,
        profit: 11117,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-11-22",
      },
      {
        month: "November",
        revenue: 47843,
        profit: 7935,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-11-08",
      },
      {
        month: "December",
        revenue: 24739,
        profit: 10002,
        buyer: "John Doe",
        address: "123 Main St, Cityville",
        date: "2024-12-23",
      },
      {
        month: "December",
        revenue: 26938,
        profit: 8371,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-12-02",
      },
    ],
    halfYearlyRevenue: [455300, 465490],
    annualRevenue: 920790,
    halfYearlyProfit: [142801, 108157],
    annualProfit: 250958,
  },
  {
    carName: "Car C",
    carValue: 45000,
    salesData: [
      {
        month: "January",
        revenue: 46109,
        profit: 6120,
        buyer: "John Doe",
        address: "654 Maple St, Boroughton",
        date: "2024-01-04",
      },
      {
        month: "January",
        revenue: 40270,
        profit: 11849,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-01-20",
      },
      {
        month: "February",
        revenue: 42051,
        profit: 10186,
        buyer: "Bob Brown",
        address: "654 Maple St, Boroughton",
        date: "2024-02-15",
      },
      {
        month: "February",
        revenue: 37713,
        profit: 12713,
        buyer: "John Doe",
        address: "456 Elm St, Townsville",
        date: "2024-02-02",
      },
      {
        month: "March",
        revenue: 45725,
        profit: 10725,
        buyer: "Charlie Davis",
        address: "321 Pine St, Hamletburg",
        date: "2024-03-24",
      },
      {
        month: "March",
        revenue: 27990,
        profit: 13300,
        buyer: "John Doe",
        address: "654 Maple St, Boroughton",
        date: "2024-03-26",
      },
      {
        month: "April",
        revenue: 47234,
        profit: 10173,
        buyer: "Charlie Davis",
        address: "321 Pine St, Hamletburg",
        date: "2024-04-28",
      },
      {
        month: "April",
        revenue: 39943,
        profit: 10494,
        buyer: "Bob Brown",
        address: "654 Maple St, Boroughton",
        date: "2024-04-12",
      },
      {
        month: "May",
        revenue: 21170,
        profit: 6589,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-05-28",
      },
      {
        month: "May",
        revenue: 41282,
        profit: 12502,
        buyer: "Jane Smith",
        address: "123 Main St, Cityville",
        date: "2024-05-07",
      },
      {
        month: "June",
        revenue: 33207,
        profit: 10914,
        buyer: "John Doe",
        address: "123 Main St, Cityville",
        date: "2024-06-07",
      },
      {
        month: "June",
        revenue: 27209,
        profit: 13466,
        buyer: "Alice Johnson",
        address: "321 Pine St, Hamletburg",
        date: "2024-06-15",
      },
      {
        month: "July",
        revenue: 46403,
        profit: 14657,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-07-12",
      },
      {
        month: "July",
        revenue: 39273,
        profit: 6952,
        buyer: "Bob Brown",
        address: "321 Pine St, Hamletburg",
        date: "2024-07-25",
      },
      {
        month: "August",
        revenue: 41547,
        profit: 9358,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-08-04",
      },
      {
        month: "August",
        revenue: 38323,
        profit: 14830,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-08-24",
      },
      {
        month: "September",
        revenue: 39448,
        profit: 7598,
        buyer: "Jane Smith",
        address: "789 Oak St, Villagetown",
        date: "2024-09-26",
      },
      {
        month: "September",
        revenue: 41149,
        profit: 6023,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-09-28",
      },
      {
        month: "October",
        revenue: 31146,
        profit: 14544,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-10-17",
      },
      {
        month: "October",
        revenue: 28663,
        profit: 8195,
        buyer: "Alice Johnson",
        address: "456 Elm St, Townsville",
        date: "2024-10-02",
      },
      {
        month: "November",
        revenue: 46116,
        profit: 12149,
        buyer: "Jane Smith",
        address: "654 Maple St, Boroughton",
        date: "2024-11-28",
      },
      {
        month: "November",
        revenue: 40338,
        profit: 10504,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-11-28",
      },
      {
        month: "December",
        revenue: 31379,
        profit: 12315,
        buyer: "Bob Brown",
        address: "654 Maple St, Boroughton",
        date: "2024-12-10",
      },
      {
        month: "December",
        revenue: 43499,
        profit: 8292,
        buyer: "Jane Smith",
        address: "654 Maple St, Boroughton",
        date: "2024-12-12",
      },
    ],
    halfYearlyRevenue: [449903, 467284],
    annualRevenue: 917187,
    halfYearlyProfit: [129031, 125417],
    annualProfit: 254448,
  },
  {
    carName: "Car D",
    carValue: 30000,
    salesData: [
      {
        month: "January",
        revenue: 38775,
        profit: 10076,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-01-19",
      },
      {
        month: "January",
        revenue: 35140,
        profit: 13015,
        buyer: "Alice Johnson",
        address: "321 Pine St, Hamletburg",
        date: "2024-01-05",
      },
      {
        month: "February",
        revenue: 21955,
        profit: 8231,
        buyer: "Alice Johnson",
        address: "123 Main St, Cityville",
        date: "2024-02-02",
      },
      {
        month: "February",
        revenue: 35818,
        profit: 10371,
        buyer: "Charlie Davis",
        address: "321 Pine St, Hamletburg",
        date: "2024-02-27",
      },
      {
        month: "March",
        revenue: 32814,
        profit: 6183,
        buyer: "Bob Brown",
        address: "789 Oak St, Villagetown",
        date: "2024-03-21",
      },
      {
        month: "March",
        revenue: 43317,
        profit: 5038,
        buyer: "Jane Smith",
        address: "456 Elm St, Townsville",
        date: "2024-03-27",
      },
      {
        month: "April",
        revenue: 32595,
        profit: 6241,
        buyer: "John Doe",
        address: "654 Maple St, Boroughton",
        date: "2024-04-27",
      },
      {
        month: "April",
        revenue: 40605,
        profit: 14271,
        buyer: "John Doe",
        address: "456 Elm St, Townsville",
        date: "2024-04-14",
      },
      {
        month: "May",
        revenue: 20679,
        profit: 8406,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-05-08",
      },
      {
        month: "May",
        revenue: 30080,
        profit: 13077,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-05-23",
      },
      {
        month: "June",
        revenue: 24478,
        profit: 9710,
        buyer: "Charlie Davis",
        address: "789 Oak St, Villagetown",
        date: "2024-06-15",
      },
      {
        month: "June",
        revenue: 38591,
        profit: 5280,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-06-11",
      },
      {
        month: "July",
        revenue: 42893,
        profit: 10384,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-07-02",
      },
      {
        month: "July",
        revenue: 20548,
        profit: 11121,
        buyer: "Jane Smith",
        address: "456 Elm St, Townsville",
        date: "2024-07-10",
      },
      {
        month: "August",
        revenue: 47153,
        profit: 6025,
        buyer: "Jane Smith",
        address: "456 Elm St, Townsville",
        date: "2024-08-04",
      },
      {
        month: "August",
        revenue: 37819,
        profit: 12169,
        buyer: "Alice Johnson",
        address: "321 Pine St, Hamletburg",
        date: "2024-08-10",
      },
      {
        month: "September",
        revenue: 45028,
        profit: 12940,
        buyer: "Bob Brown",
        address: "456 Elm St, Townsville",
        date: "2024-09-19",
      },
      {
        month: "September",
        revenue: 25270,
        profit: 8933,
        buyer: "Jane Smith",
        address: "789 Oak St, Villagetown",
        date: "2024-09-07",
      },
      {
        month: "October",
        revenue: 35371,
        profit: 6640,
        buyer: "Charlie Davis",
        address: "321 Pine St, Hamletburg",
        date: "2024-10-26",
      },
      {
        month: "October",
        revenue: 22409,
        profit: 14393,
        buyer: "Alice Johnson",
        address: "789 Oak St, Villagetown",
        date: "2024-10-19",
      },
      {
        month: "November",
        revenue: 45783,
        profit: 7637,
        buyer: "Jane Smith",
        address: "123 Main St, Cityville",
        date: "2024-11-27",
      },
      {
        month: "November",
        revenue: 33506,
        profit: 13958,
        buyer: "Jane Smith",
        address: "654 Maple St, Boroughton",
        date: "2024-11-10",
      },
      {
        month: "December",
        revenue: 46921,
        profit: 11072,
        buyer: "Bob Brown",
        address: "123 Main St, Cityville",
        date: "2024-12-09",
      },
      {
        month: "December",
        revenue: 36458,
        profit: 8173,
        buyer: "Charlie Davis",
        address: "456 Elm St, Townsville",
        date: "2024-12-26",
      },
    ],
    halfYearlyRevenue: [394847, 439159],
    annualRevenue: 834006,
    halfYearlyProfit: [109899, 123445],
    annualProfit: 233344,
  },
];

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [selectedCar, setSelectedCar] = useState("Car A");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedCarSalesData, setSelectedCarSalesData] = useState([]);
  useEffect(() => {
    getOrders().then((res) => {
      console.log(res);
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomers().then((res) => {
      setCustomers(res.total);
    });


    const car = carSalesData.find((car) => car.carName === selectedCar);
    setSelectedCarSalesData(car ? car.salesData : []);
  }, []);

  useEffect(() => {
    const car = carSalesData.find((car) => car.carName === selectedCar);
  
    if (car) {
      // Aggregate sales data by month
      const aggregatedSalesData = car.salesData.reduce((acc, curr) => {
        const existingMonth = acc.find(item => item.month === curr.month);
        if (existingMonth) {
          // Combine sales for the same month
          existingMonth.sales += curr.sales;
        } else {
          // Add new month if not already present
          acc.push({ ...curr });
        }
        return acc;
      }, []);
  
      setSelectedCarSalesData(aggregatedSalesData);
    } else {
      setSelectedCarSalesData([]);
    }
  }, [selectedCar]);
  
  



  const totalRevenue = carSalesData.reduce((total, car) => {
    const carRevenue = car.salesData.reduce((sum, sale) => sum + sale.revenue, 0);
    return total + carRevenue;
  }, 0);
  const totalProfits = carSalesData.reduce((total, car) => {
    const carRevenue = car.salesData.reduce((sum, sale) => sum + sale.profit, 0);
    return total + carRevenue;
  }, 0);
  // Function to calculate revenue and profit for a specific car and month
  const getCarMonthData = (carName) => {
    const car = carSalesData.find((car) => car.carName === carName);
    if (!car) return { months: [], revenues: [], profits: [] };
  
    const aggregatedData = {};
  
    // Aggregate data by month
    car.salesData.forEach((sale) => {
      const { month, revenue, profit } = sale;
  
      if (!aggregatedData[month]) {
        aggregatedData[month] = { revenue: 0, profit: 0 };
      }
  
      aggregatedData[month].revenue += revenue;
      aggregatedData[month].profit += profit;
    });
  
    // Prepare data for the chart
    const months = Object.keys(aggregatedData);
    const revenues = months.map((month) => aggregatedData[month].revenue);
    const profits = months.map((month) => aggregatedData[month].profit);
  
    return { months, revenues, profits };
  };
  
  const getTotalMonthData = (month) => {
    let totalRevenue = 0;
    let totalProfit = 0;
  
    carSalesData.forEach((car) => {
      const monthData = car.salesData.filter((sale) => sale.month === month);
  
      monthData.forEach((sale) => {
        totalRevenue += sale.revenue;
        totalProfit += sale.profit;
      });
    });
  
    return { totalRevenue, totalProfit };
  };
  




  const getAllCarsAnnualData = () => {
    const carNames = carSalesData.map((car) => car.carName);
    const annualRevenue = carSalesData.map((car) =>
      car.salesData.reduce((sum, sale) => sum + sale.revenue, 0)
    );
    const annualProfit = carSalesData.map((car) =>
      car.salesData.reduce((sum, sale) => sum + sale.profit, 0)
    );

    return { carNames, annualRevenue, annualProfit };
  };

  const { months, revenues, profits } = getCarMonthData(selectedCar);
  // const { totalRevenue: totalMonthRevenue, totalProfit: totalMonthProfit } = getTotalMonthData(selectedMonth);
  const { carNames, annualRevenue, annualProfit } = getAllCarsAnnualData();
  
// Monthly chart data for a single car (Revenue and Profit over months)
const carMonthlyData = {
  labels: months, // Array of unique months
  datasets: [
    {
      label: "Revenue",
      data: revenues, // Array of aggregated monthly revenue data
      backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for Revenue
    },
    {
      label: "Profit",
      data: profits, // Array of aggregated monthly profit data
      backgroundColor: "rgba(153, 102, 255, 0.6)", // Color for Profit
    },
  ],
};

// Annual chart data for all cars (Annual Revenue and Profit for each car)
const allCarsAnnualData = {
  labels: carNames, // Array of car names
  datasets: [
    {
      label: "Annual Revenue",
      data: annualRevenue, // Array of annual revenue data for each car
      backgroundColor: "rgba(75, 192, 192, 0.6)", // Color for Annual Revenue
    },
    {
      label: "Annual Profit",
      data: annualProfit, // Array of annual profit data for each car
      backgroundColor: "rgba(153, 102, 255, 0.6)", // Color for Annual Profit
    },
  ],
};

const CarSalesTable = ({ carName, salesData }) => {
  if (!salesData || salesData.length === 0) {
    return <p>No data available for the selected car.</p>;
  }

  return (
    <div>
      <h2>{carName} Sales Data</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Month</th>
            <th>Revenue</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale, index) => (
            <tr key={index}>
              <td>{carName}</td>
              <td>{sale.month}</td>
              <td>{sale.revenue}</td>
              <td>{sale.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



// console.log(carSalesData)
  return (
  <>
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"TotalRevenue in $"}
          value={totalRevenue}
        />
     

        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Profits in $"}
          value={totalProfits}
        />
        
        {/* <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={customers}
        /> */}
        {/* <DashboardCard
          icon={
            <DollarCircleFilled
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenu"}
          value={revenue}
        /> */}
      </Space>
      <Space>
        {/* <RecentOrders />
        <DashboardChart /> */}

      </Space>

     
    </Space>
    <div style={{width:"80vw",padding:50}}>
      <h1>Car Sales Data</h1>


            {/* Car selection dropdown */}
            <div>
        <h2 >Select a Car</h2>
        <select
          value={selectedCar}
          
          onChange={(e) => {
            setSelectedCar(e.target.value)
            const car = carSalesData.find((car) => car.carName === selectedCar);
            setSelectedCarSalesData(car ? car.salesData : []);
          
          }}
        >
          <option sele>Select a car</option>
          {carSalesData.map((car) => (
            <option key={car.carName} value={car.carName}>
              {car.carName}
            </option>
          ))}
        </select>
      </div>


      <CarSalesTable carName={selectedCar} salesData={selectedCarSalesData} />



      {/* Single Car Monthly Revenue and Profit Chart */}
      <div>
        <h2>{selectedCar} - Monthly Revenue and Profit</h2>
        <Bar data={carMonthlyData} />
      </div>

      {/* Annual Revenue and Profit Chart for All Cars */}
      <div>
        <h2>Annual Revenue and Profit for All Cars</h2>
        <Bar data={allCarsAnnualData} />
      </div>
    </div>
  </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {/* <ShoppingCartOutlined /> */}
        {/* {icon} */}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>
      
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },

          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "price",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
      
    </>
  );
}

function DashboardChart() {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={revenueData} />;
    </Card>
  );
}

export default Dashboard;
