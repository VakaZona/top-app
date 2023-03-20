import { SidebarProps } from './Sidebar.ptops';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from 'layout/Menu/Menu';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }): JSX.Element => {
	return (
		<div className={cn(className, styles.sidebar) } {...props}>
			<Logo />
			<div>Search</div>
			<Menu />
		</div>
	);
};