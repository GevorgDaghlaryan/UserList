import { useEffect, useState } from 'react';

//icons
import empty  from './assets/icons/empty.png';

//services
import User from './services/User';

//styles
import './assets/styles/main.scss';
import './App.css';

//components
import UserList from './components/UserList';
import SearchForm from './components/SearchForm';

function App() {

    const [userList, setUserList] = useState([]);
    const [list, setList] = useState([]);
    const [isCheck, setIsCheck] = useState(true);

    const getUsersList = async () => {
        try {
            const data = await User.getUsers();

            setUserList(data);
            setList(data);

            if (!data?.length) {
                throw new Error('Error');
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getUsersList();
    }, []);

    useEffect(() => {
        setList(userList);
    }, [userList])

    return (
        <div className="App">
            <div className={isCheck? "app-container" : "app-container-dark"}>
                <SearchForm
                    onSearch={(text) => {
                        setList(userList.filter((user) => user.login.includes(text.toLowerCase())));
                    }}
                    onEditColor={(checked) => {
                        setIsCheck(checked)
                    }}
                />
                {
                    list.length ?
                        <UserList
                            list={list}
                            onDelete={(user) => {
                                setUserList(userList.filter((item) => item.id !== user.id));
                            }}
                        />
                        : (
                            <div className={'empty_container'}>
                                <img src={empty} className={'empty_container_img'}/>
                            </div>
                        )
                }
            </div>
        </div>
    );
}

export default App;
