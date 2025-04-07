import React, { useState } from 'react';
import './AddTask.css';

const AddTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    tag: '',
    type: 'individual',
    members: [{ name: '', responsibility: '' }],
    isRecurring: false,
    reminder: '',
    estimatedTime: '',
  });

  const handleChange = (field, value) => {
    setTask({ ...task, [field]: value });
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...task.members];
    updatedMembers[index][field] = value;
    setTask({ ...task, members: updatedMembers });
  };

  const addMember = () => {
    setTask({
      ...task,
      members: [...task.members, { name: '', responsibility: '' }],
    });
  };

  const handleSubmit = () => {
    console.log('Submitting Task:', task);
    // This is where you’d send task to backend / ML model
  };

  return (
    <div className="card advanced-task-form">
      <h2>Create a Smart Task</h2>

      <input
        type="text"
        placeholder="Title"
        value={task.title}
        onChange={(e) => handleChange('title', e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) => handleChange('description', e.target.value)}
      />

      <label>Deadline:</label>
      <input
        type="datetime-local"
        value={task.deadline}
        onChange={(e) => handleChange('deadline', e.target.value)}
      />

      <label>Tag:</label>
      <select value={task.tag} onChange={(e) => handleChange('tag', e.target.value)}>
        <option value="">-- Select --</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="urgent">Urgent</option>
        <option value="health">Health</option>
      </select>

      <label>Task Type:</label>
      <select value={task.type} onChange={(e) => handleChange('type', e.target.value)}>
        <option value="individual">Individual</option>
        <option value="team">Team</option>
      </select>

      {task.type === 'team' && (
        <div className="team-section">
          <h4>Team Members</h4>
          {task.members.map((member, i) => (
            <div key={i} className="member-fields">
              <input
                type="text"
                placeholder="Member Name"
                value={member.name}
                onChange={(e) => handleMemberChange(i, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Responsibility"
                value={member.responsibility}
                onChange={(e) => handleMemberChange(i, 'responsibility', e.target.value)}
              />
            </div>
          ))}
          <button onClick={addMember}>+ Add Member</button>
        </div>
      )}

      <label>Estimated Time to Complete (hrs):</label>
      <input
        type="number"
        value={task.estimatedTime}
        onChange={(e) => handleChange('estimatedTime', e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={task.isRecurring}
          onChange={(e) => handleChange('isRecurring', e.target.checked)}
        />
        Recurring Task?
      </label>

      <label>Reminder (mins before deadline):</label>
      <input
        type="number"
        value={task.reminder}
        onChange={(e) => handleChange('reminder', e.target.value)}
      />

      <button className="submit-btn" onClick={handleSubmit}>
        Create Task
      </button>
    </div>
  );
};

export default AddTask;
