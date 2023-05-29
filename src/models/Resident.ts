

class Resident {
    firstname: String;
    lastname: String;
    mdoc: String;
    building: String;
    pod: String;
    initial:String;
    constructor(firstname:String, lastname:String, mdoc:String, building:String, pod:String)
    {
        this.initial = "";
        this.firstname = firstname;
        this.lastname = lastname;
        if (firstname && lastname)
        {
            this.initial = firstname.charAt(0) + lastname.charAt(0)
        }
        this.mdoc = mdoc;
        this.building = building;
        this.pod = pod;
    }

}

export default Resident;