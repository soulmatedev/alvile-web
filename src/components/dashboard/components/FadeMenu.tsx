import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IconButton } from '@material-ui/core';

const FadeMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				id="fade-button"
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				<MoreVertIcon />
			</IconButton>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				<MenuItem onClick={handleClose}>Edit</MenuItem>
				<MenuItem onClick={handleClose}>Open to read</MenuItem>
				<MenuItem onClick={handleClose}>Export</MenuItem>
				<MenuItem onClick={handleClose}>Share</MenuItem>
				<MenuItem onClick={handleClose}>Delete</MenuItem>
			</Menu>
		</div>
	);
};

export default FadeMenu;
