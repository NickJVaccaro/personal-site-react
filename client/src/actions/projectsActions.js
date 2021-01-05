import axios from 'axios';

export const getProjects = async (dispatch) => {
    const res = await axios.get('projects');

    let projects = res.data;
    projects = projects.map(project => {
        project.description = JSON.parse(project.description);
        return project;
    });

    dispatch({
        type: 'GET_PROJECTS',
        payload: projects
    });
}