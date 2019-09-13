module.exports = {
    intToBoolean,
    projectToBody
  };
  
  function intToBoolean(int) {
    return int === 1 ? true : false;
  }
  
  function projectToBody(project) {
    const result = {
      ...project,
      completed: intToBoolean(project.completed)
    };
    
    return result;
  }
  