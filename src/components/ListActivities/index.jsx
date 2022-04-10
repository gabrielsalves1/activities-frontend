import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Activity from '../Activity';

export default function ListActivities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    api.get('activities').then((resposta) => {
      setActivities(resposta.data);
    });
  }, []);
  console.log(activities)

  return(
    <div>
      <ul>
        {activities?.map((activity) => (
          <li key={activity.id}>
            <Activity 
            id={activity.id}
            name={activity.name}
            description={activity.description}
            date={activity.date}
            activityFileUrl={activity.activityFileUrl}
            activityFileBlob={activity.activityFile_blob}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}