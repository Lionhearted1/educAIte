import React from "react";
import "./dashboard.css";


function ActivitySectionComponent() {
  return (
    <div>
      <section>
        <div class="activityBox">
          <div class="challenges">
            <h2>Challenges</h2>
            <ul>
              <li>🏃‍♂️ 30-Day Running Streak</li>
              <li>🏋 1000 Pushups in a Month</li>
              <li>🏊‍♀️ Swim 20km in a Month</li>
            </ul>
          </div>
          <div class="activity-feed">
            <h2>Friends Activity</h2>
            <table>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="https://images.pexels.com/photos/3642482/pexels-photo-3642482.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                  </div>
                </td>
                <td>
                  <h4>Jane just set a new record in cycling:30 miles!</h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="https://images.pexels.com/photos/18913148/pexels-photo-18913148/free-photo-of-man-standing-against-the-setting-sun.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                  </div>
                </td>
                <td>
                  <h4>Mike completed the 30-Day Running Streak Challenge!</h4>
                </td>
              </tr>
              <tr>
                <td width="60px">
                  <div class="imgBx">
                    <img src="https://images.pexels.com/photos/3771112/pexels-photo-3771112.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&dpr=2" />
                  </div>
                </td>
                <td>
                  <h4>Anna shared a new workout: 'Hill Sprints Interval'.</h4>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActivitySectionComponent;
