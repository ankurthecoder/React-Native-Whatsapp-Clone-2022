class UsersMessageInfo {
  constructor(
    isMsgDelivered,
    isMsgRead,
    isMsgPending,
    lastMsgType,
    lastMsgTxt,
    lastMsgTime,
    unReadMsgCount,
  ) {
    this.isMsgDelivered = isMsgDelivered;
    this.isMsgRead = isMsgRead;
    this.isMsgPending = isMsgPending;
    this.lastMsgType = lastMsgType;
    this.lastMsgTxt = lastMsgTxt;
    this.lastMsgTime = lastMsgTime;
    this.unReadMsgCount = unReadMsgCount;
  }
}

export default UsersMessageInfo;