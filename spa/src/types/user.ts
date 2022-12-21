export{}

interface IUser {
    username: string;
    email?: string;
    token: string;
    getLoggedInInformation(): string; 
}


function getLoggedInInformation(): string | null{
    return localStorage.getItem('token');
}