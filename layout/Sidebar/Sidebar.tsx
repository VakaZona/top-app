import { SidebarProps } from './Sidebar.ptops';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from 'layout/Menu/Menu';

export const Sidebar = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};