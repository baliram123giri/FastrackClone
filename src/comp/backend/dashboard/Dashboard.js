import React from "react";
import Welcome from "../common/Welcome";

export default function Dashboard() {
  return (
    <>
      <Welcome>
        <div className="page-header">
          <h3 className="page-title">Dashboard</h3>
        </div>
        <div className="row grid-margin">
          <div className="col-12">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fa fa-user mr-2" />
                      New users
                    </p>
                    <h2>54000</h2>
                    <label className="badge badge-outline-success badge-pill">
                      2.7% increase
                    </label>
                  </div>
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fas fa-hourglass-half mr-2" />
                      Avg Time
                    </p>
                    <h2>123.50</h2>
                    <label className="badge badge-outline-danger badge-pill">
                      30% decrease
                    </label>
                  </div>
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fas fa-cloud-download-alt mr-2" />
                      Downloads
                    </p>
                    <h2>3500</h2>
                    <label className="badge badge-outline-success badge-pill">
                      12% increase
                    </label>
                  </div>
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fas fa-check-circle mr-2" />
                      Update
                    </p>
                    <h2>7500</h2>
                    <label className="badge badge-outline-success badge-pill">
                      57% increase
                    </label>
                  </div>
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fas fa-chart-line mr-2" />
                      Sales
                    </p>
                    <h2>9000</h2>
                    <label className="badge badge-outline-success badge-pill">
                      10% increase
                    </label>
                  </div>
                  <div className="statistics-item">
                    <p>
                      <i className="icon-sm fas fa-circle-notch mr-2" />
                      Pending
                    </p>
                    <h2>7500</h2>
                    <label className="badge badge-outline-danger badge-pill">
                      16% decrease
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Welcome>
    </>
  );
}
