import React, { useState, useEffect } from "react";
import axios from "axios";

import "../Styles/table.css";
import { data } from "autoprefixer";

function Table() {
  // const [datas, setDatas] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const objValues = Object.keys(datas).map((k) => datas[k])
  // console.log(objValues)

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // function fetchData() {
  //   axios
  //     .get(`https://api.pintu.co.id/v2/wallet/supportedCurrencies`)
  //     .then((res) => {
  //       // const { data } = res.data;
  //       // const temp = [datas];
  //       // temp.push(data);
  //       // setDatas(temp);
  //       // console.log(datas);
  //       const results = res.data;
  //       setDatas(results);
  //       console.log(results);
  //     })
  //     .catch((err) => {
  //       alert(err.toString());
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  return (
    <div id="container">
      <table cellSpacing={0} cellPadding={0}>
        <caption>Harga Crypto dalam Rupiah Hari Ini</caption>
        <thead id="table-header">
          <tr>
            <th scope="col">
              <p>CRYPTO</p>
            </th>
            <th scope="col">
              <p>HARGA</p>
            </th>
            <th scope="col">
              <p>24 Jam</p>
            </th>
            <th scope="col">
              <p>1 MGG</p>
            </th>
            <th scope="col">
              <p>1 BLN</p>
            </th>
            <th scope="col">
              <p>1 THN</p>
            </th>
          </tr>
        </thead>
        <tbody id="table-body">
          <tr>
            <>
              <td id="data1">
                <a href="#">
                  <div>
                    <div id="logo">Logo</div>
                    <div id="names">
                      <p>Bitcoin</p>
                      <p>BTC</p>
                    </div>
                  </div>
                </a>
              </td>
              <td id="data2">
                <div>Rp 374.834.579</div>
              </td>
              <td id="data3">
                <div>
                  <div>sym</div>
                  <p>%</p>
                </div>
              </td>
              <td id="data4">
                <div>
                  <div>sym</div>
                  <p>%</p>
                </div>
              </td>
              <td id="data5">
                <div>
                  <div>sym</div>
                  <p>%</p>
                </div>
              </td>
              <td id="data6">
                <div>
                  <div>sym</div>
                  <p>%</p>
                </div>
              </td>
            </>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
