import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css'

interface IProps {
    title: string
}

const Header: React.FC<IProps> = ({ title }) => {
    const history = useHistory()
    return (
        <div className="header" onClick={() => history.push('/')}><div className="header-text" data-testid="header">{title}</div></div>
    )
}

export default Header;