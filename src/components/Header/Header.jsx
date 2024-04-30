import React, { useState, useEffect } from 'react';
import logo from '../../assets/image/img_5.png';
import time from '../../assets/svg/Vector (8).svg';
import compas from '../../assets/svg/Vector (9).svg';
import { useNavigate, Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIcon from '@mui/icons-material/Phone';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import MenuIcon from '@mui/icons-material/Menu';
import BedroomPage from '../../Pages/BedroomPage';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // State to track screen width
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Function to update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value === 'melissa2021') {
      navigate('/melissa2021');
    }
  };

  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <div className='flex justify-center items-center border-b border-gray-100 pb-5 sm:text-black-500 md:text-black-800 lg:text-red-70'>
        <div>
          <div>
            <div className='flex'>
              <img src={time} alt="" />
              <h4> Пн-Пт с 10:00 до 20:00</h4>
            </div>
            <h4 className='text-end'>Сб-Вс с 10:00 до 19:00</h4>
          </div>
          <div className='flex'>
            <img src={compas} alt="" />
            <h4>Наши салоны</h4>
          </div>
        </div>
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <div>
          {screenWidth > 768 ? (
            <div>
              <div>
                <h2>
                  Отдел продаж:<PhoneIcon /> 8 (495) 664-54-57
                </h2>
                <h2 className='text-end'>
                  <PhoneIcon /> 8 (929) 928-86-35
                </h2>
              </div>
              <div>
                <h2>
                  <PhoneIcon /> Звонки по России: 8-800-000-00-00
                </h2>
                <h2 className='text-red-500 text-end'>
                  <FreeBreakfastIcon /> Бесплатно
                </h2>
              </div>
            </div>
          ) : (
            <MenuIcon />
          )}
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Новинки
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Гостинные
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Прихожие
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              Спальни
            </MenuItem>

            <MenuItem onClick={handleClose} disableRipple>
              Детские
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Кровати
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Матрасы
            </MenuItem>
          </StyledMenu>
        </div>
      </div>
      <div className='flex mt-4 sm:text-black md:text-black -800 lg:text-red-70'>
          <div>
        <Link to='/catalog'>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
              style={{ color: 'red', backgroundColor: 'white' }}
            >
              Каталог
            </Button>
            </Link>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Новинки
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Гостинные
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Прихожие
              </MenuItem>
              <Link to='/bedroom'>
                <MenuItem disableRipple>
                  <select onChange={handleChange}>
                    <option>Спальни</option>
                    <option value="melissa2021">Мелисса 2021</option>
                    <option>Карина</option>
                    <option>Камелия 2021</option>
                  </select>
                </MenuItem>
              </Link>

              {showOptions && (
                <div>

                </div>
              )}
              <MenuItem onClick={handleClose} disableRipple>
                Детские
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Кровати
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Матрасы
              </MenuItem>
            </StyledMenu>
          </div>
      
        <Link to='/about'>О нас</Link>
        <Link to='/modeling'>3D-моделирование</Link>
        <Link to='/buyer'>Покупателю</Link>
        <Link to='/payment'>Доставка и оплата</Link>
        <Link to='/news'>Новости</Link>
        <input className="w-330 h-9 box-border border border-blue-700 rounded-full" type="text" placeholder="Поиск по сайту..." />
      </div>
    </div>
  );
}