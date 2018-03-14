module.exports= class File{
    constructor(name,lastModifiedDate, changedBy, commitMessage, size) {
        console.log(lastModifiedDate);
        this.name = name;
        this.lastModifiedDate = lastModifiedDate;
        this.changedBy = changedBy;
        this.commitMessage = commitMessage;
        this.size = size;
    }
}