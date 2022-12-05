//components
import UserListItem from '../UserListItem';

//styles
import styles from './UserList.module.scss';


function UserList({list, onDelete}) {


	return (
		<div className={styles['user_list_contauner']}>
			<div className={styles['user_list']}>
				{
					list.map((user) => {
						return (
							<UserListItem
								user={user}
								key={user.id}
								onDelete={onDelete}
							/>
						);					
					})
				}
			</div>
		</div>
	);

}

export default UserList;