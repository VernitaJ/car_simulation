import discord
from discord.ext import commands
import datetime
import os
import sys
import dotenv
import asyncio
import time
from dotenv import load_dotenv
dir_path = os.path.dirname(os.path.realpath(__file__))
parent_dir_path = os.path.abspath(os.path.join(dir_path, os.pardir))
sys.path.insert(0, parent_dir_path)
from connection import Topic, connecter


load_dotenv()

TOKEN = os.getenv('DISCORD_TOKEN')

mqtt = connecter.create("Discord Bot")

t = Topic()

VELOCITY = 50
DIRECTION = 50

client = commands.Bot(command_prefix=".", help_command=None)

@client.command()
async def help(ctx):
    embed = discord.Embed(colour=discord.Colour(
        0xf5a623), timestamp=datetime.datetime.utcnow())
    embed.add_field(name=".drive", value="the drive command takes a string of < (left), > (right), f (forward), r (reverse), b (boost), s (stop) and does each of them for one second. \n[Example: .drive <f>b>s>f]", inline=False)
    embed.add_field(name=".go", value="forward", inline=False)
    embed.add_field(name=".gor", value="forward & right", inline=False)
    embed.add_field(name=".gol", value="forward & left", inline=False)
    embed.add_field(name=".rr", value="reverse", inline=False)
    embed.add_field(name=".rrl", value="reverse & left", inline=False)
    embed.add_field(name=".rrr", value="reverse & right", inline=False)
    embed.add_field(name=".s", value="stop", inline=False)
    await ctx.send(embed=embed)

# def seperateArgs(args, delimeter):
#     finalArgs = []
#     toAppend = ''
#     index = 0
#     for i in args:
#         if(i == delimeter):
#             finalArgs.append(toAppend.strip())
#             toAppend = ''
#         else:
#             toAppend += i
#         if(index == len(args) - 1):
#             finalArgs.append(toAppend.strip())
#             toAppend = ''
#         index += 1
#     return finalArgs


async def control(v, d):
  if v > 0:
    mqtt.publish(t.throttle_forward, str(v))
  elif v < 0:
    mqtt.publish(t.throttle_reverse, str(v))
  else:
    mqtt.publish(t.throttle_reverse, "0")
  if d > 0:
    mqtt.publish(t.steering_right, str(d))
    time.sleep(1)
    mqtt.publish(t.steering_right, "0")
  elif d < 0:
    mqtt.publish(t.steering_left, str(d))
    time.sleep(1)
    mqtt.publish(t.steering_left, "0")
  else:
    mqtt.publish(t.steering_left, "0")


@client.command()
async def drive(ctx, *args):
  s = 50
  d = 0
  for i in args[0]:
    time.sleep(1)
    if i == "<":
      d = -50
      await control(s, d)
    if i == ">":
      d = -50
      await control(s, d)
    if i == "s":
      s = 0
      await control(s, d)
    if i == "r":
      s = -50
      await control(s, d)
    if i == "f":
      s = 50
      await control(s, d)
    if i == "b":
      s = s*2
      await control(s, d)
  await control(0,0)


@client.command()
async def go(ctx):
  await control(VELOCITY, 0)

@client.command()
async def rr(ctx):
  await control(-VELOCITY, 0)

@client.command()
async def rrl(ctx):
  await control(-VELOCITY, -DIRECTION)

@client.command()
async def rrr(ctx):
  await control(-VELOCITY, DIRECTION)

@client.command()
async def s(ctx):
  await control(0, 0)


@client.command()
async def gol(ctx):
  await control(VELOCITY, -DIRECTION)

@client.command()
async def gor(ctx):
  await control(VELOCITY, DIRECTION)

@client.command()
async def boost(ctx):
  await control(100, 0)
  await time.sleep(1)
  await control(VELOCITY, 0)

@client.event
async def on_ready():
  await client.change_presence(status=discord.Status.idle, activity=discord.Game("vroom!"))
  print('Logged in as')
  print(client.user.name)
  print(client.user.id)
  print('------')

client.run(TOKEN)
