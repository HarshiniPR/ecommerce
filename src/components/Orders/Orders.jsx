import React from "react";
import './Orders.css';

export default function Orders() {
  return (
    <div className="orderss">
      <h1 className="order-h1" style={{margin: '40px 0px 40px 273px'}}>My Orders</h1>
      <table className="firstTable" style={{marginLeft:'160px'}}>
        <thead>
          <tr>
            <th>Order no.</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Order Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>6000000006</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/1200px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg"
                alt="susan image"
              ></img>
              Susan
            </td>
            <td>11/1/23</td>
            <td>
              <strong>$48.71</strong>
            </td>
            <td>
              <p className="status delivered">Delivered</p>
            </td>
            <td> <a href="Orders.jsx">View Order</a>  |  <a href="Reorder.jsx">Reorder</a></td>
          </tr>
          <tr>
            <td>56347239</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/1200px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg"
                alt="susan image"
              ></img>
              Susan
            </td>
            <td>31/3/23</td>
            <td>
              <strong>$1000.00</strong>
            </td>
            <td>
              <p className="status cancelled">Cancelled</p>
            </td>
            <td> <a href="Orders.jsx">View Order</a>  |  <a href="Reorder.jsx">Reorder</a></td>
          </tr>
          <tr>
            <td>72993745</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/1200px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg"
                alt="susan image"
              ></img>
              Susan
            </td>
            <td>14/5/23</td>
            <td>
              <strong>$69.69</strong>
            </td>
            <td>
              <p className="status pending">Pending</p>
            </td>
            <td> <a href="Orders.jsx">View Order</a>  |  <a href="Reorder.jsx">Reorder</a></td>
          </tr>
          <tr>
            <td>927309002</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/1200px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg"
                alt="susan image"
              ></img>
              Susan
            </td>
            <td>15/2/23</td>
            <td>
              <strong>$248.99</strong>
            </td>
            <td>
              <p className="status shipped">Shipped</p>
            </td>
            <td> <a href="Orders.jsx">View Order</a>  |  <a href="Reorder.jsx">Reorder</a></td>
          </tr>
          <tr>
            <td>72849924</td>
            <td>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg/1200px-Susan_Sarandon%2C_Festival_de_Sitges_2017_%28cropped%29.jpg"
                alt="Susan image"
              ></img>
              Susan
            </td>
            <td>18/3/23</td>
            <td>
              <strong>$122.80</strong>
            </td>
            <td>
              <p className="status delivered">Delivered</p>
            </td>
            <td> <a href="Orders.jsx">View Order</a>  |  <a href="Reorder.jsx">Reorder</a></td>
          </tr>
                  </tbody>
      </table>
    </div>
  );
}
