import style from './Header.module.css';

export const Header = () => {
    return (
        <div className={style.Header}>
            <div className={style.HeaderContainer}>
                <h1 className={style.HeaderTitle}>Politeh21</h1>
            </div>
        </div>
    )
}