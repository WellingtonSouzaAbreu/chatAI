import styled from 'styled-components';

export const ChatContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: #282c34;
	color: white;
	font-family: 'Arial', sans-serif;
`;

export const ChatBox = styled.div`
	width: 40vw;
	padding: 20px;
	background-color: #3d424a;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 24px;
	margin-bottom: 20px;
`;

