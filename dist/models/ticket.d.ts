import { Types } from 'mongoose';
declare namespace Ticket {
    interface Model {
        _id?: Types.ObjectId;
        userID?: Types.ObjectId;
        clubID?: Types.ObjectId;
        remoteID?: string;
        memberId: number;
        memberNumber: string;
        ticketDate: Date;
        employeeId: number;
        ticketStatusId: number;
        locationId: number;
        stationId: number;
        periodId: number;
        tableId: number;
        voidReasonId: number;
        recipMemberName: string;
        recipMemberNumber: string;
        recipMemberLastName: string;
        exportStatus: number;
        ticketNumber: string;
        wasVoided: boolean;
        voidedBy: number;
        taxExempt: boolean;
        serviceChargeExempt: boolean;
        wasReopened: boolean;
        reopenedBy: number;
        wasRetendered: boolean;
        retenderedBy: number;
        voidReason: string;
        closedTime: Date;
        voidedTime: Date;
        reopenedTime: Date;
        retenderedTime: Date;
        lastUpdate: Date;
        updateBy: number;
        memberFirstName: string;
        memberLastName: string;
        memberName: string;
        number: string;
        numberSuffix: string;
        ticketHeaderId: number;
        details: Detail[];
    }
    interface Detail {
        _id?: Types.ObjectId;
        remoteID?: string;
        ticketHeaderId: number;
        lineNumber: number;
        itemId: number;
        itemDesc: string;
        quantity: number;
        price: number;
        cost: number;
        seatNumber: number;
        note: string;
        gratuityTotal: number;
        taxTotal: number;
        voidReason: string;
        itemTypeId: number;
        itemTypeDescription: string;
        deleted: false;
        modifierText: string;
        revCode: string;
        discountRevCode: string;
        revenueCodeId: number;
        revenueCodeDesc: string;
        ticketDetailId: number;
        voidedBy: number;
        wasVoided: false;
        sectionHeaderId: number;
        lastUpdate: Date;
        updateBy: number;
        firedTime: Date;
        itemAddedBy: number;
    }
}
export default Ticket;
