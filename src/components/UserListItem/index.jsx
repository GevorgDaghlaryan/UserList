//styles
import styles from './UserListItem.module.scss';

function UserListItem({ user, onDelete }) {

	return (
		<div className={styles['card']}>
			<img src={user['avatar_url']} className={styles['card-avatar']} alt="Avatar" />
			<div className={styles['container']}>
				<h4><b>{user['login']}</b></h4>
				<a href={user['html_url']}>Accaunt</a>
				<button
					className={styles['card_delete_button']}
					onClick={() => {
						onDelete(user);
					}}
				>
					Delete
				</button>
			</div>
		</div>
	);
}

export default UserListItem;