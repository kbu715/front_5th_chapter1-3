import type { User } from "../../types/user";
import type { Notification } from "../../types/notification";

// AppContext 타입 정의
export interface AppContextType {
	theme: string;
	toggleTheme: () => void;
	user: User | null;
	login: (email: string, password: string) => void;
	logout: () => void;
	notifications: Notification[];
	addNotification: (message: string, type: Notification["type"]) => void;
	removeNotification: (id: number) => void;
}
