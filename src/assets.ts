export async function recieveLocalStorage(): Promise<string[]> {
    let bro = localStorage.getItem('searchCodes');
    if (bro == null || bro == undefined) {
        return [];   
    } else {
        let list = bro.replaceAll("\"", '').replace('[','').replace(']','').split(',');
        return list;
    }
}

export async function setLocalStorage(newCode: string) {
    let bro = await recieveLocalStorage();
    bro.push(newCode);
    localStorage.setItem('searchCodes', JSON.stringify(bro));
}

export function matchCode(code: string, searchCode: string): boolean {
    let index = 0;
    for (let i = 0; i < searchCode.length; i++) {
        if (searchCode.charCodeAt(i) <= 57 && searchCode.charCodeAt(i) >= 48) {
            break;
        } else {
            index += 1;
        }
    }
    if (searchCode.substring(0, index) === code) {
        return true;
    }
    return false;
}

// export function translateStoredValues() {

// }