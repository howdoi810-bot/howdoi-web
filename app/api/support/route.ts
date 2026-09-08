import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

interface SupportTicket {
  id: string;
  appName: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, appName = 'Cho Con - Chuẩn Bị Đón Bé' } = body;

    if (!email || !email.includes('@') || !message) {
      return NextResponse.json(
        { success: false, message: 'Vui lòng cung cấp email hợp lệ và nội dung tin nhắn.' },
        { status: 400 }
      );
    }

    const ticket: SupportTicket = {
      id: 'ticket_' + Math.random().toString(36).substring(2, 9),
      appName,
      name: name || 'Người dùng ẩn danh',
      email: email.trim().toLowerCase(),
      subject: subject || 'Yêu cầu hỗ trợ chung',
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const dataDir = path.join(process.cwd(), 'data');
    const filePath = path.join(dataDir, 'support-tickets.json');

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch (e) {}

    let tickets: SupportTicket[] = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      tickets = JSON.parse(fileContent);
    } catch (e) {
      tickets = [];
    }

    tickets.push(ticket);
    await fs.writeFile(filePath, JSON.stringify(tickets, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Tin nhắn của bạn đã được gửi thành công! Đội ngũ phát triển sẽ phản hồi trong vòng 24 giờ.',
    });
  } catch (error) {
    console.error('Support ticket error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi phía máy chủ, vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
