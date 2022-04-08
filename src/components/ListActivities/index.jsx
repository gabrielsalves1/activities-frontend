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
        {activities?.map((activity) => (
          <Activity 
            id={activity.id}
            name={activity.name}
            description={activity.description}
            date={activity.date}
            activityFile={activity.activityFile}
          />
        ))}
    </div>
  );
}