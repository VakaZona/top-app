import { SidebarProps } from './Sidebar.ptops';
import styles from './Sidebar.module.css';
import cn from 'classnames';

export const Sidebar = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			Sidebar
		</div>
	);
};