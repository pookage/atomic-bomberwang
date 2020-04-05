const template = document.createElement("template");

template.innerHTML = `
	<a-cone
		position="0 0 0"
		radius-top="0.5"
		radius-bottom="0.5"
		segments-radial="4"
		color="green"
		rotation="0 45 0"
	></a-cone>
`;

export default template;